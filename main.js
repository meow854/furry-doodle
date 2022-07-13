sus= "";
lol= "";

function preload() {
    sus= loadSound("Amogus.mp3");
    lol= loadSound("buntystay.mp3");
}

function setup() {
    canvas= createCanvas(600, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill('#bad5ff');
    stroke('#3383ff');
}