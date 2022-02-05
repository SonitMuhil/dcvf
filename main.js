difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(500, 450);
canvas.position(790, 95);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#6C91C2');

    document.getElementById("app_side").innerHTML = "Width And Height of a Font will be = " + difference +"px";
    textSize(difference)   
    fill('#FFe787');
    text('Sonit', 50, 400);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWrist = " + leftWristX + " rightWrist = "+ rightWristX + " difference = " + difference);
    }
}