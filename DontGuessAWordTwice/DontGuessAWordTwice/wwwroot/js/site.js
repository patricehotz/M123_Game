// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
$(function () {
    ctx.rect(50, 50, 850, 850); // rect(startX, startY, width, height)
    ctx.fillStyle = "rgb(0, 165, 0)"; // Pure green
    ctx.strokeStyle = 'black';
    ctx.fill();
});


let startPosition = { x: 0, y: 0 };
let lineCoordinates = { x: 0, y: 0 };
let isDrawStart = false;

const getClientOffset = (event) => {
    const { pageX, pageY } = event.touches ? event.touches[0] : event;
    const x = pageX - canvas.offsetLeft;
    const y = pageY - canvas.offsetTop;

    return {
        x,
        y
    }
}

const drawLine = () => {
    ctx.beginPath();
    ctx.moveTo(startPosition.x, startPosition.y);
    ctx.lineTo(lineCoordinates.x, lineCoordinates.y);
    ctx.stroke();
}

const mouseDownListener = (event) => {
    startPosition = getClientOffset(event);
    isDrawStart = true;
}

const mouseMoveListener = (event) => {
    if (!isDrawStart) return;

    lineCoordinates = getClientOffset(event);
    drawLine();
}

const mouseupListener = (event) => {
    isDrawStart = false;
}



canvas.addEventListener('mousedown', mouseDownListener);
canvas.addEventListener('mousemove', mouseMoveListener);
canvas.addEventListener('mouseup', mouseupListener);

canvas.addEventListener('touchstart', mouseDownListener);
canvas.addEventListener('touchmove', mouseMoveListener);
canvas.addEventListener('touchend', mouseupListener);
