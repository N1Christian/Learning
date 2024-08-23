const canvas = document.querySelector('canvas')

//create a canvas on the webpage
canvas.width = window.innerWidth
canvas.height = window.innerHeight


var coordinatesElement = ["",""];
document.addEventListener('click', (event) => {
    const clickX = event.clientX;
    const clickY = event.clientY;
    coordinatesElement = [clickX,clickY]
    console.log(`Click coordinates: (${clickX}, ${clickY})`);
});

var block = document.getElementById("block");

function drawArrowHead(x,y) {
    //x,y are the starting points
    ctx.closePath();
    ctx.beginPath();
    // Set a start-point
    ctx.moveTo(x,y);    
    // Set an end-point
    ctx.lineTo(x,y-30);
    ctx.lineTo(x+20,y);
    ctx.lineTo(x,y+30);
    ctx.lineTo(x,y);
    ctx.fillStyle = 'green';
    ctx.fill()
    ctx.closePath();
}

function drawleftArrowHead(x,y) {
    //x,y are the starting points
    ctx.closePath();
    ctx.beginPath();
    // Set a start-point
    ctx.moveTo(x,y);    
    // Set an end-point
    ctx.lineTo(x,y-30);
    ctx.lineTo(x-20,y);
    ctx.lineTo(x,y+30);
    ctx.lineTo(x,y);
    ctx.fillStyle = 'green';
    ctx.fill()
    ctx.closePath();
}

//start drawing
const ctx = canvas.getContext('2d')
ctx.lineWidth = 20;
ctx.strokeStyle = "green"

//starting pt
const start_X = 429
const start_Y = 1451

//Turning points
const newX = 212; const newY = 1132;
const newX2 = 220; const newY2 = 796;
const newX3 = 650; const newY3 = 446;
const newX4 = 650; const newY4 = 350;
const newX5 = 915;  const newY5 = 350;
const newY6 = 553;

ctx.beginPath() //start drawing
ctx.moveTo(start_X,start_Y)

var dock = 50; //0-71

//parse the dock number
var slot_num = 1;
var zone = 1;
if (dock < 20) {
    zone = 1;
} else {zone = 2;}

if (dock < 20) {
    slot_num = dock;
}
else if (dock >= 36) {
    slot_num = dock-20+2;
}

else if (dock >= 56) {
    slot_num = dock-20+3;
}
else {slot_num = dock-20;}


switch(zone) {
    case 1: //zone1
    ctx.lineTo(newX,newY)
    //move forward 
    ctx.lineTo(newX, newY-(15 * slot_num))
    //turn right then show the arrowhead
    ctx.lineTo(newX+15, newY-(15 * slot_num))

    ctx.stroke() 
    //draw a triangle now
    drawArrowHead(newX+15, newY-(15 * slot_num))

    //displaying the block
    block.style.left = `${newX+45}px`;
    block.style.top = `${newY-(15 * slot_num)}px`;
    block.style.display = "block";
    break;

    case 2: //Zone 2
    ctx.lineTo(newX,newY)
    ctx.lineTo(newX2,newY2)
    ctx.lineTo(newX3,newY3)
    ctx.lineTo(newX4,newY4)
    ctx.lineTo(newX5,newY5) //arrive at zone 2 at (newX5, newY6)
    ctx.lineTo(newX5,newY6+(15* slot_num))
    ctx.lineTo(newX5-15, newY6+(15 * slot_num))
    ctx.stroke();
    //turn left to show the arrowhead
    

    drawleftArrowHead(newX5-15, newY6+(15 * slot_num))

    //displaying the block
    block.style.left = `${newX5-95}px`;
    block.style.top = `${newY6+(15 * slot_num)}px`;
    block.style.display = "block";
    break;
}










