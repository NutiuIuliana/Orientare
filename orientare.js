window.addEventListener("deviceorientation", onDeviceOrientation);

function onDeviceOrientation(evt) {
    var alpha = evt.alpha; 
    var beta = evt.beta;   
    var gamma = evt.gamma;  

    document.getElementById("a").innerHTML = "Alpha = " + alpha.toFixed(2);
    document.getElementById("b").innerHTML = "Beta = " + beta.toFixed(2);
    document.getElementById("c").innerHTML = "Gamma = " + gamma.toFixed(2);

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var center = { x: canvas.width / 2, y: canvas.height / 2 };
    var squareSize = 50;

    context.setTransform(1, 0, 0, 1, 0, 0); 
    context.clearRect(0, 0, canvas.width, canvas.height); 

    context.translate(center.x, center.y);
    context.rotate(alpha * Math.PI / 180); 

    context.beginPath();
    context.rect(-squareSize / 2, -squareSize / 2, squareSize, squareSize);
    context.stroke();
}
