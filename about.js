const target = document.querySelectorAll("[data-anime]");
function animeScroll(element) {
    const windowTop = window.pageYOffset + ((window.innerHeight + 3)/ 4);
    element.forEach((e) => {
        if((windowTop) > (e.offsetTop - 500)) {
            e.classList.add("animation");
        }else {
            e.classList.remove("animation");
        }
    });
}

window.addEventListener("scroll", () => {
    animeScroll(target);
});