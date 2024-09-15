let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");

function updateSlide() {
    const carouselImages = document.getElementById('carousel-images');
    const translateXValue = -currentIndex * 600; // 600px is the width of each image
    carouselImages.style.transform = `translateX(${translateXValue}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
}

function openLink(imgElement) {
    const currentSrc = imgElement.src;

    // Bepaal welke link moet worden geopend op basis van de afbeelding
    let url;
    if (currentSrc.includes("Squad1H-Renzo.JPG")) {
        url = "https://renzowille.github.io/your-tribe-profile-card/index.html";
    } else if (currentSrc.includes("Squad1H-Riley.JPG")) {
        url = "https://ryryesther.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Miel.JPG")) {
        url = "https://miel775.github.io/your-tribe-profile-card/";
    }

    // Open de link in een nieuw tabblad
    if (url) {
        window.open(url, "_blank");
    }
}