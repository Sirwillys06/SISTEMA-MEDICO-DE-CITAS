const canvas = document.getElementById("lineaSignosVitales");
const ctx = canvas.getContext("2d");

// Ajusta el tamaño del canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = 30; 
}

// dibujar la linea de signos vitales
function drawVitalSignsLine() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    const width = canvas.width;
    const height = canvas.height;
    const spacing = 20; 

    ctx.beginPath();
    ctx.moveTo(0, height / 2);

    for (let x = 0; x <= width; x += spacing) {
        const peak = Math.random() * 15; // aleatorio para crear picos
        ctx.lineTo(x, (height / 2) + (Math.sin(x / spacing) * peak));
    }

    ctx.lineTo(width, height / 2); // 
    ctx.strokeStyle = "rgba( 255, 255,255)"; 
    ctx.lineWidth = 3; 
    ctx.stroke();
}

// inicializa el canvas y dibuja la línea
resizeCanvas();
drawVitalSignsLine();


window.addEventListener('resize', () => {
    resizeCanvas();
    drawVitalSignsLine();
});

// dibuja la linea en intervalos para animar
setInterval(drawVitalSignsLine, 1000); 
