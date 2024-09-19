document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideWidth = slides[0].offsetWidth + 15; // Width of each slide plus the gap
    const totalSlides = slides.length;
    const totalWidth = slideWidth * totalSlides;

    let offset = 0;

    // Duplicate slides for seamless looping
    for (let i = 0; i < totalSlides; i++) {
        carouselWrapper.appendChild(slides[i].cloneNode(true));
    }

    // Function to move the carousel
    function moveCarousel() {
        offset = (offset + 0.1) % totalWidth; // Slower movement, 0.1 pixels per tick
        carouselWrapper.style.transform = `translateX(-${offset}px)`;
    }

    // Set interval for slower scrolling
    setInterval(moveCarousel, 20); // Slower by increasing interval to 20ms
});
