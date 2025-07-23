const logginBtn = document.querySelector(".login-button");
const modalScreen = document.querySelector(".modal-screen");
const closeXBtn = document.querySelector(".close-x-btn");
const close = document.querySelector(".close");
const continueBtn = document.querySelector(".continue");


// function escape() {
//     modalScreen.classList.add("hidden");
// }


logginBtn.addEventListener("click", function () {
    modalScreen.classList.toggle("hidden");
});

closeXBtn.addEventListener("click", function () {
    modalScreen.classList.add("hidden")
});
close.addEventListener("click", function () {
    modalScreen.classList.add("hidden")
});
continueBtn.addEventListener("click", function () {
    modalScreen.classList.add("hidden")
});

document.body.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
        modalScreen.classList.add("hidden");
    }
})

// function showModal() {
//     modalScreen.classList.remove("hidden");
// }

// function hideModal() {
//     modalScreen.classList.add("hidden");
// }

// logginBtn.addEventListener("click", showModal());

// close.addEventListener("click", hideModal());

// closeXBtn.addEventListener("click", hideModal());

// continueBtn.addEventListener("click", hideModal());

// document.body.addEventListener("keyup", function (event) {
//     if (event.key === "Escape") {
//         hideModal();
//     }
// })