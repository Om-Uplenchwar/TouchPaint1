Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");
color = "Black";

var LastX, LastY;
var touchEvent = "";

var width = screen.width;
newwidth = screen.width-70;
newheight = screen.height-300;

if(width < 992){
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newheight;
    document.body.style.overflow = "hidden";
}

Canvas.addEventListener("touchStart", my_touchStart);

function my_touchStart(e) {
    color = document.getElementById("cInput").value;
    console.log(color);

    LastX = e.touches[0].clientX-canvas.offsetLeft;
    LastY = e.touches[0].clientY-canvas.offsetTop;

}

Canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    currenttouchX = e.touches[0].clientX - Canvas.offsetLeft;
    currenttouchY = e.touches[0].clientY - Canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.moveTo(LastX, LastY);
        ctx.lineTo(currenttouchX, currenttouchY);
        ctx.stroke();
    

    LastX = currenttouchX;
    LastY = currenttouchY;
}