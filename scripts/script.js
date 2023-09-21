document.addEventListener("DOMContentLoaded", function() {
  const wrapper = document.querySelector(".wrapper");
  const carousel = document.querySelector(".carousel");
  const firstCardWidth = carousel.querySelector(".card").offsetWidth;
  const arrowBtns = document.querySelectorAll(".wrapper button");

  // Add event listeners for the arrow buttons to scroll the carousel left and right
  arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.id == "left") {
        if (carousel.scrollLeft <= 0) {
          // als we aan het begin zijn, scroll naar het einde.
          carousel.scrollLeft = carousel.scrollWidth;
        } else {
          carousel.scrollLeft -= firstCardWidth;
        }
      } else {
        if (carousel.scrollLeft + carousel.clientWidth + firstCardWidth >= carousel.scrollWidth) {
          // als we aan het einde zijn, terug naar begin.
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += firstCardWidth;
        }
      }
    });
  });
});
