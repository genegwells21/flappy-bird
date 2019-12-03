var cvs = document.getElementById('canvas');
this is creating our bird image on a continuous basis

var ctx = cvs.getContext('2d');
this gives us method properties

var imageName = new Image(); 
imageName.src="images/img.png";

var audioName = new Audio();
audioName.src="audio/audio.png";
this loads our image and audios

ctx.drawImage(imageName, X,Y, Width, Height);
ctx.drawImage(bird image, 100,150,50,50);

this creates the drawing of our bird

on keyDown Event : bY-=20

function draw()  {
ctx.drawImage(bg, 0,0);
ctx.drawImage( pipeNorth, pX, pY);
ctx.drawImage( pipeSouth, pX, pY+Const);

ctx.drawImage(fb, 0, cvs.height - fb.height);

ctx.drawImage( bird, bX, bY);

bY + = gravity;
requestAnimationFrame(draw);
}
draw();

var pipe = [];
pipe[0]={
x : cvs.width,
y : 0
};
function draw() {
// code
for(Var i=0; i<pipe.length;i++){
ctx.drawImage( pipeNorth, pipe[i].x, pipe[i].y);
ctx.drawImage( pipeSouth, pipe[i].x, pipe[i].y +Const);
pipe[i].x--;
if( pipe[i].x == cvs.width - 188){
pipe.push(
x :cvs.width,
y: Math.floor( Math.random() * pN.height - pN.height 

);
}

