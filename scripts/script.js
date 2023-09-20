document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper button");
  
    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
      });
    });
  
    function randomizeItems(items) {
      var cached = items.slice(0), temp, i = cached.length, rand;
      while (--i) {
        rand = Math.floor(Math.random() * (i + 1));
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
      }
      return cached;
    }
  
    // Example: Call this function to randomize your card elements
    function randomizeCardList() {
      const cardList = document.querySelector(".carousel");
      const cardItems = Array.from(cardList.querySelectorAll(".card"));
      const randomizedItems = randomizeItems(cardItems);
      cardList.innerHTML = ""; // Clear the existing list
      randomizedItems.forEach(item => cardList.appendChild(item));
    }
  
    // Call the randomizeCardList function to randomize your card elements
    randomizeCardList();
  });