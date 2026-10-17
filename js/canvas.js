// ------------------------------
// Drawing a cat in canvas
// ------------------------------
// University Of Worcester (2026) HTML5 Canvas with JavaScript COMP1441 Web Technologies. Available at: https://worcesterbb.blackboard.com/ultra/courses/_56065_1/outline/file/_2970200_1 (Accessed: 30 April 2026)
const canvas = document.getElementById('catCanvas'); 
const ctx = canvas.getContext('2d'); // Get the 2D drawing context of the canvas element
const eyeRadius = 25;

function drawCat() {
    // ------------------------------
    // Circle for the head
    // ------------------------------
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, Math.PI * 2);
    ctx.fillStyle = '#ffa600';
    ctx.fill();
    ctx.closePath();

    // ------------------------------
    // Two triangles for the ears
    // ------------------------------
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(170, 50);
    ctx.lineTo(190, 100);
    ctx.fillStyle = '#ffa600';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(230, 50);
    ctx.lineTo(210, 100);
    ctx.fillStyle = '#ffa600';
    ctx.fill();
    ctx.closePath();

    // ------------------------------
    // Two circles for the eyes
    // ------------------------------
    ctx.beginPath();    
    ctx.arc(170, 180, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(230, 180, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    // ------------------------------
    // A triangle for the nose
    // ------------------------------
    ctx.beginPath();
    ctx.moveTo(200, 220);
    ctx.lineTo(190, 240);
    ctx.lineTo(210, 240);
    ctx.fillStyle = '#FF69B4';
    ctx.fill();
    ctx.closePath();

    // ------------------------------
    // Whiskers
    // ------------------------------
    ctx.beginPath();
    ctx.moveTo(150, 220);
    ctx.lineTo(100, 220);
    ctx.moveTo(250, 220);
    ctx.lineTo(300, 220);
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(150, 230);
    ctx.lineTo(100, 250);
    ctx.moveTo(250, 230);
    ctx.lineTo(300, 250);
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(150, 210);
    ctx.lineTo(100, 200);
    ctx.moveTo(250, 210);
    ctx.lineTo(300, 200);
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.closePath();

    // ------------------------------
    // A body
    // ------------------------------
    ctx.beginPath();
    ctx.arc(200, 450, 150, 0, Math.PI * 2);
    ctx.fillStyle = '#ffa600';
    ctx.fill();
    ctx.closePath();

    // ------------------------------
    // Arms
    // ------------------------------
    ctx.beginPath();
    ctx.arc(100, 400, 50, 0, Math.PI * 2);
    ctx.fillStyle = '#f09c01';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(300, 400, 50, 0, Math.PI * 2);
    ctx.fillStyle = '#f09c01';
    ctx.fill();
    ctx.closePath();

    // ------------------------------
    // Cat saying meow
    // ------------------------------
    // w3schools (2026). HTML Canvas Text. Available at: https://www.w3schools.com/graphics/canvas_text.asp (Accessed: 23 April 2026)
    ctx.beginPath();
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('meow', 300, 100);
    ctx.closePath();
}
// ------------------------------
// Two smaller circles for the pupils
// ------------------------------
// Pupil objects with properties for position, displacement, and radius
const pupil1 = {
    x: 170,
    y: 180,
    dx: 1, // displacement
    radius: 10
}
const pupil2 = {
    x: 230,
    y: 180,
    dx: 1,
    radius: 10
}

// Function to draw the 2 pupils on the canvas
function drawPupils() {
    ctx.beginPath();
    ctx.arc(pupil1.x, pupil1.y, pupil1.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(pupil2.x, pupil2.y, pupil2.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

// ------------------------------
// Update function
// ------------------------------
function update(){
    pupil1.x += pupil1.dx;
    pupil2.x += pupil2.dx;
    
    // left eye boundaries
    const leftMin = 170 - eyeRadius + pupil1.radius;
    const leftMax = 170 + eyeRadius - pupil1.radius;

    // right eye boundaries
    const rightMin = 230 - eyeRadius + pupil2.radius;
    const rightMax = 230 + eyeRadius - pupil2.radius;

    // Check if pupils hit the boundaries of the eyes and reverse direction if they do
    if (pupil1.x + pupil1.radius > leftMax || pupil1.x - pupil1.radius < leftMin) {
        pupil1.dx = - pupil1.dx;
    }
    if (pupil2.x + pupil2.radius > rightMax || pupil2.x - pupil2.radius < rightMin) {
        pupil2.dx = - pupil2.dx;
    }
}
// ------------------------------
// Animation function
// ------------------------------
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas each frame to prevent trails
    drawCat();
    drawPupils();
    update();
    requestAnimationFrame(animate); //Tells the browser to perform an animation and requests that the browser calls a specified function to update an animation before the next cycle.
}

animate(); // Start the animation