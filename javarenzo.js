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
    } else if (currentSrc.includes("Squad1H-Anouar.JPG")) {
        url = "https://anouarab2.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Anouk.JPG")) {
        url = "https://anoukderooij24.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Daan.JPG")) {
        url = "https://dvdalfsen.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Finn.JPG")) {
        url = "";
    } else if (currentSrc.includes("Squad1H-Kai.JPG")) {
        url = "https://kaiven7.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Kate.JPG")) {
        url = "https://kitkatisvibing.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Kerem.JPG")) {
        url = "https://keremttc.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Aria.JPG")) {
        url = "https://poormoa00.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Arman.JPG")) {
        url = "https://armanvd.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Kyan.JPG")) {
        url = "https://kyantg.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Luuk-2.JPG")) {
        url = "https://lutrian1.github.io/your-tribe-profile-card---Luuk/";
    } else if (currentSrc.includes("Squad1H-Marije.JPG")) {
        url = "";
    } else if (currentSrc.includes("Squad1H-Mkiyas.JPG")) {
        url = "https://mikiyas-hs.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Nawal.JPG")) {
        url = "https://nawallox.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Nayome.JPG")) {
        url = "https://nayomekaia.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Rapha.JPG")) {
        url = "";
    } else if (currentSrc.includes("Squad1H-Reyhan.JPG")) {
        url = "https://reyrey-https.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Rick.JPG")) {
        url = "https://rickfdnd.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Safoe.JPG")) {
        url = "https://safae-e.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Sascha.JPG")) {
        url = "https://saschavanvliet.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Sebastiaan-2.JPG")) {
        url = "https://sebastiaan-hva.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Senne.JPG")) {
        url = "https://senneb31.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Sidney.JPG")) {
        url = "https://sidopjescherm.github.io/your-tribe-profile-card/";
    } else if (currentSrc.includes("Squad1H-Sjors.JPG")) {
        url = "";
    } else if (currentSrc.includes("Squad1H-Stella.JPG")) {
        url = "https://misspastelwitch.github.io/your-tribe-profile-card/";
    } 

    // Open de link in een nieuw tabblad
    if (url) {
        window.open(url, "_blank");
    }
}