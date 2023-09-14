window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.content');
    const scrollTop = window.scrollY;

    if (scrollTop > 60) { // You can adjust this value to determine when the navbar becomes sticky
        navbar.classList.add('sticky');
        content.style.marginTop = '60px'; // Match the height of the sticky navbar
    } else {
        navbar.classList.remove('sticky');
        content.style.marginTop = '0';
    }
});
