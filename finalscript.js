const wrapper = document.getElementById('carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const visibleSlides = 5;
let currentIndex = 0;
let interval;

function startCarousel() {
    interval = setInterval(() => {
        // Beweeg de carousel naar de volgende set van 5 afbeeldingen
        currentIndex++;
        if (currentIndex >= totalSlides / visibleSlides) {
            currentIndex = 0;
        }
        const translateXValue = -(currentIndex * 100);
        wrapper.style.transform = `translateX(${translateXValue}%)`;
    }, 3000); // Beweeg elke 3 seconden naar de volgende set
}

function stopCarousel() {
    clearInterval(interval);
}

// Start de carousel zodra de pagina wordt geladen
window.onload = function () {
    startCarousel();

    // Pauzeer de carousel wanneer er met de muis over wordt gegaan
    wrapper.addEventListener('mouseover', stopCarousel);

    // Herstart de carousel wanneer de muis weer weggaat
    wrapper.addEventListener('mouseout', startCarousel);
};
