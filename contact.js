const target = document.querySelectorAll("[data-anime]");
const menuMobile = document.querySelector("#menu-mobile");
const options = document.querySelector("#menu-mobile-click");
function animeScroll(element) {
    const windowTop = window.pageYOffset + ((window.innerHeight + 3)/ 4);
    element.forEach((e) => {
        if((windowTop) > (e.offsetTop -500)) {
            e.classList.add("animation");
        }else {
            e.classList.remove("animation");
        }
    });
}

window.addEventListener("scroll", () => {
    animeScroll(target);
});

menuMobile.addEventListener("click", () => {
    if (options.classList.contains("optionsMenu")) {
        options.classList.remove("optionsMenu")
    } else {
        options.classList.add("optionsMenu")
    }
});