status = "";
video = "";

function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(350, 200);
}

function draw() {
    image(video, 0, 0, 600, 400);
}

function start(){
   objectDetector=ml5.objectDetector("cocossd",modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}