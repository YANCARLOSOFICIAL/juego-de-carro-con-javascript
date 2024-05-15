// Espera a que se cargue todo el contenido HTML antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    const car = document.getElementById('car');
    const cannon = document.getElementById('cannon');

    // Función para mover el carro de izquierda a derecha
    function moveCar() {
        // Ancho de la ventana del navegador
        const windowWidth = window.innerWidth;
        // Ancho del carro (asumimos que el carro tiene un ancho fijo)
        const carWidth = car.offsetWidth;

        // Genera una posición horizontal aleatoria para el carro
        const randomPosition = Math.floor(Math.random() * (windowWidth - carWidth));

        // Mueve el carro a la posición aleatoria
        car.style.left = randomPosition + 'px';

        // Calcula la posición del cañón para apuntar al carro
        const cannonPosition = randomPosition + carWidth / 2;
        cannon.style.left = cannonPosition + 'px';

        // Disparo del cañón (animación)
        fireCannon();
    }

    // Función para simular el disparo del cañón
    function fireCannon() {
        cannon.style.transform = 'rotate(-45deg)'; // Gira el cañón hacia arriba antes del disparo

        setTimeout(() => {
            // Vuelve a la posición original del cañón después del disparo
            cannon.style.transform = 'rotate(0deg)';
        }, 500); // Duración del disparo (medio segundo)
    }

    // Llama a la función para mover el carro y disparar cada 2.5 segundos
    setInterval(moveCar, 2500);
});
