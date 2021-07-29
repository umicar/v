status = "";
video = "";
object = [];

function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(350, 200);
}



function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw() {
    image(video, 0, 0, 600, 400);
    if (status == true) {
        objectDetector.detect(video, gotResults);
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status :  Objects Detected";
            document.getElementById("object").innerHTML = "Number 0f Objects Detected are " + object.length;
            fill("red");
            stroke("red");
            nofill();
            percent = floor(object[i].confidence * 100);
            text(object[i].label + "" + percent + "%" + object[i].x + 15, object[i].y + 15);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }

}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        object = results;
    }
}