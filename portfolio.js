const opacity = document.getElementsByClassName("opacity")
const text = document.getElementsByClassName("text")
const menuMobile = document.querySelector("#menu-mobile");
const options = document.querySelector("#menu-mobile-click");

for(let i = 0; i < opacity.length; i++){
        opacity[i].addEventListener("mouseover", () => {
            setTimeout(() => {
                text[i].style.transition = "1s"
                text[i].style.opacity = "1"
            },80)
        });
}

menuMobile.addEventListener("click", () => {
    if (options.classList.contains("optionsMenu")) {
        options.classList.remove("optionsMenu")
    } else {
        options.classList.add("optionsMenu")
    }
});

// mouseout
// mouseover