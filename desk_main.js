img = "";

function preload() 
{
    img = loadImage("table.jpg");
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
    text("Table", 60, 75);
    noFill();
    stroke("#FF0000");
    rect(60, 60, 500, 350);
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