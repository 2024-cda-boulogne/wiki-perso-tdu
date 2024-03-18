document.querySelector("#burgermenu").addEventListener("click", openMenu);

function openMenu() {
    const x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document
    .querySelector("#theme-mode")
    .addEventListener("change", changeThemeMode);

function changeThemeMode() {
    const x = document.body;
    const y = document.querySelector(".theme-toggle");
    y.classList.toggle("darkmode");
    x.classList.toggle("darkmode");
    if (x.classList.contains("darkmode")) {
        localStorage.setItem("theme-mode", "dark");
    } else {
        localStorage.setItem("theme-mode", "light");
    }
}

window.addEventListener("load", setThemeByLocalStorage, false);

function setThemeByLocalStorage() {
    const x = document.body;
    const y = document.querySelector(".theme-toggle");
    if (localStorage.getItem("theme-mode") === "dark") {
        x.classList.add("darkmode");
        y.classList.add("darkmode");
    } else {
        y.classList.remove("darkmode");
        x.classList.remove("darkmode");
    }
}

const showNumber = document.getElementById("about");
const favDialog = document.getElementById("favDialog");
const btnModal = document.querySelector(".btn-modal");
showNumber.addEventListener("click", () => {
    favDialog.showModal();
});

btnModal.addEventListener("click", () => {
    favDialog.close();
});
