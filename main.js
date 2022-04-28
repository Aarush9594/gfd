Webcam.set({
    width: 300,
    height: 250,
    image_format: "png",
    png_quality: 90000
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        console.log(data_uri)
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+' "/>" '
    })
 }
 
 console.log("ml5 version: ",ml5.version);

 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3vQW4Ic0y/model.json",modelloaded);

 function modelloaded() {
    console.log("Teachable Machine model is loaded")
}

function check() {
    img = document.getElementById("captured_image")
    console.log(img)
    classifier.classify(img,gotresult)
 }
 
 function gotresult(error,result) {
     if (error) {
         console.log(error)
     }
     else{
         console.log(result)
         document.getElementById("result_object_name").innerHTML = result[0].label
         document.getElementById("result_object_accuracy").innerHTML = (result[0].confidence*100).toFixed(1)
     }
 }
