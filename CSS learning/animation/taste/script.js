const canvas = document.querySelector('canvas');

//this method returns an object with lots of tools for drawing
const ctx = canvas.getContext("2d");

// Define a new path
ctx.beginPath();

// Set a start-point
ctx.moveTo(0, 0); 

// Set an end-point
ctx.lineTo(200, 100);
ctx.strokeStyle = "red";
// Stroke it (Do the Drawing)
ctx.stroke();

console.log("finished")