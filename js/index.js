function openMenu() {
    const x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.querySelector(".btToggle").addEventListener("click", changeThemeMode);

function changeThemeMode() {
    console.log("test");
    const x = document.body.querySelector(".container");
    console.log(x);
    x.classList.toggle("darkmode");
}
