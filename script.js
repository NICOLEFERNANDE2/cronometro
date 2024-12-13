const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');
const stopButton = document.getElementById('stop');
const startButton = document.getElementById('start');

let stopwatchInterval;
let runningTime = 0;  // Tiempo en segundos
let isRunning = false;

// Función para calcular y mostrar el tiempo
const calculateTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Iniciar
const start = () => {
    if (!isRunning) {
        stopwatchInterval = setInterval(() => {
            runningTime++;
            stopwatch.textContent = calculateTime(runningTime);
        }, 1000);
        isRunning = true;
        playPauseButton.textContent = "Pausar";
        playPauseButton.classList.add('paused');
        secondsSphere.style.animationPlayState = 'running';  // Iniciar rotación
        startButton.textContent = "Reiniciar";  // Cambiar el texto de "Iniciar" a "Reiniciar"
    }
}

// Pausar
const playPause = () => {
    if (isRunning) {
        clearInterval(stopwatchInterval);
        isRunning = false;
        playPauseButton.textContent = "Reanudar";
        secondsSphere.style.animationPlayState = 'paused';  // Detener rotación
    } else {
        start();  // Si estaba en pausa, reanudar
    }
}

// Detener el cronómetro y resetear
const stop = () => {
    clearInterval(stopwatchInterval);
    isRunning = false;
    runningTime = 0;
    stopwatch.textContent = calculateTime(runningTime);
    playPauseButton.textContent = "Pausar";
    playPauseButton.classList.remove('paused');
    secondsSphere.style.animationPlayState = 'paused';  // Detener rotación
    startButton.textContent = "Iniciar";  // Cambiar el texto de "Reiniciar" a "Iniciar"
}

// Eventos botones
stopButton.addEventListener('click', stop);
startButton.addEventListener('click', start);
playPauseButton.addEventListener('click', playPause);
