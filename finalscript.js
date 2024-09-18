document.getElementById('submit').addEventListener('click', function() {
    const passcode = document.getElementById('passcode').value;
    if (passcode === "1,2,3") {
        alert('Access granted!');
    } else {
        alert('Invalid passcode!');
    }
});


    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const totalItems = 33;  // Total number of carousel items
    const visibleItems = 3; // Number of visible items at a time
    const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20; // Add margin

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    });