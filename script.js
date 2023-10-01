document.addEventListener("DOMContentLoaded", function () {
    const sandwichButton = document.querySelector(".sandwich-button");
    const mobileNav = document.querySelector(".nav");
    sandwichButton.addEventListener("click", function () {
        sandwichButton.classList.toggle("active");
        mobileNav.classList.toggle("open");
    })

});