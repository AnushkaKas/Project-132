img = "";
status = "";

function preload() 
{
    img = loadImage("bedroom.jpg");
}

function setup() 
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 60, 75);
    noFill();
    stroke("#FF0000");
    rect(60, 60, 450, 300);
}

function modelLoaded() 
{
    console.log("Model Loaded!");
    status = true;
    objectDetection.detect(img, gotResult);
}

function gotResult(error, results) 
{
    if (error) 
    {
        console.error(error);
    }
    console.log(results);
}