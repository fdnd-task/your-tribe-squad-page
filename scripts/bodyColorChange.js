// Function to change the background color when section2 is in the viewport
function changeBackgroundColor(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.body.style.backgroundColor = 'var(--yellow-color)'; // Change to your desired background color
        } else {
            document.body.style.backgroundColor = 'var(--primary-color)'; // Change back to the default background color when not in view
        }
    });
}

// Create an Intersection Observer
const sectionObserver = new IntersectionObserver(changeBackgroundColor, {
    root: null, // Use the viewport as the root
    threshold: 0.5 // You can adjust this threshold as needed
});

// Observe the section2 element
const section2 = document.querySelector('#section2');
sectionObserver.observe(section2);
