const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.primary-list')
const btn = document.querySelector('.button-list')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
    btn.classList.toggle("active");
})