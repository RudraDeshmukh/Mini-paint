var mouseEvent="empty";
var lastx,lasty;
var currentx,currenty;
var canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var color="black";
var width=6;

canvas.addEventListener("mousedown",mymouse_down);
function mymouse_down(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove",mymouse_move);
function mymouse_move(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}
canvas.addEventListener("mouseup",mymouse_up);
function mymouse_up(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouse_leave);
function mymouse_leave(e){
    mouseEvent="mouseleave";
}