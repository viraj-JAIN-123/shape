function setup(){
canvas=createCanvas(1000,600)
canvas.position(300,250)
video=createCapture(VIDEO)
video.hide()
}
function draw(){
image(video,350,150,300,300)
fill("red")
stroke("yellow")
circle(50,50,80)
circle(950,50,80)
circle(50,550,80)
circle(950,550,80)
fill("green")
stroke("yellow")
rect(90,25,820,50)
rect(90,525,820,50)
rect(25,90,55,420)
rect(925,90,55,420)
}
function preload(){

}