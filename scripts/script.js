var modal = document.getElementById("myModal");

// Get the button that opens the modal
var buttons = document.querySelectorAll(".js-open-modal");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

console.log(buttons)
// When the user clicks the button, open the modal 

var active
buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener("click", function () {
        console.log("test")
        modal.style.display = "block"
        active = document.getElementById(button.dataset.opens)
        active.classList.add("active")
    })
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    active.classList.remove("active")
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        active.classList.remove("active")
    }
}