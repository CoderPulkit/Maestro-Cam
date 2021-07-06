function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,300);
    video.hide();
}

function draw(){
    image(video,0,0,400,300);
   }
   function takesnap(){
       save("snap.png");
   }