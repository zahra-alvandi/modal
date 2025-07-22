const logginBtn = document.querySelector(".login-button");
const modalScreen = document.querySelector(".modal-screen");
const closeXBtn = document.querySelector(".close-x-btn");
const close = document.querySelector(".close");

function escape() {
    modalScreen.classList.add("hidden");
}


logginBtn.addEventListener("click", function () {
    modalScreen.classList.toggle("hidden");
});

closeXBtn.addEventListener("click", function () {
    modalScreen.classList.add("hidden")
});
close.addEventListener("click", function () {
    modalScreen.classList.add("hidden")
});