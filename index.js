const btn1 = document.querySelector("#img-1");
const btn2 = document.querySelector("#img-2");
const btn3 = document.querySelector("#img-3");
const btn4 = document.querySelector("#img-4");
const text = document.querySelector("#text");
const ptext = document.querySelector("#ptext");
const divImageHome = document.querySelector("#imgs");
const btnHomeImg = document.querySelector("#btn-home-img");
const menuMobile = document.querySelector("#menu-mobile");
const options = document.querySelector("#menu-mobile-click");

const arrayBtn = [btn1, btn2, btn3, btn4];

btn1.addEventListener("click", () => {
    addAnimationText(text, ptext, btnHomeImg);
    text.textContent = 'Projeto Flow';
    ptext.textContent = 'Projeto feito para um museu de arte perto do sudoeste de Londres. O Projeto Paramour é uma declaração de arquitetura moderna e ousada.';
    removeClassActive(arrayBtn);
    btn1.classList.add("active");
    divImageHome.style.backgroundImage = "url(../img/home/desktop/image-hero-paramour.jpg)";
});

btn2.addEventListener("click", () => {
    addAnimationText(text, ptext, btnHomeImg);
    text.textContent = "Seraph Station";
    ptext.textContent = "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."
    removeClassActive(arrayBtn);
    btn2.classList.add("active");
    divImageHome.style.backgroundImage = "url(../img/home/desktop/image-hero-seraph.jpg)";
});

btn3.addEventListener("click", () => {
    addAnimationText(text, ptext, btnHomeImg);
    text.textContent = "Federal II Tower"
    ptext.textContent = "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches."
    removeClassActive(arrayBtn);
    btn3.classList.add("active");
    divImageHome.style.backgroundImage = "url(../img/home/desktop/image-hero-federal.jpg)";
});

btn4.addEventListener("click", () => {
    addAnimationText(text, ptext, btnHomeImg);
    text.textContent = "Trinity Bank Tower"
    ptext.textContent = "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives."
    ptext.style.fontSize = '25px'
    removeClassActive(arrayBtn);
    btn4.classList.add("active");
    divImageHome.style.backgroundImage = "url(../img/home/desktop/image-hero-trinity.jpg)";
});

function removeClassActive(array) {
    array.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove("active")
        }
    });
}

function addAnimationText(h1, p, btn) {
    h1.classList.add("animation-h1");
    p.classList.add("animation-p");
    btn.classList.add("animation-btn");
    setTimeout(() => {
        h1.classList.remove("animation-h1");
        p.classList.remove("animation-p");
        btn.classList.remove("animation-btn");
    }, 2000)
}

/* Animation */
const target = document.querySelectorAll("[data-anime]");
const elementDivText = document.querySelector("#text-primcipal-info1");
const elementDivText2 = document.querySelector("#group4");
function animeScroll(element, element2, element3) {
    const windowTop = window.pageYOffset + (window.innerHeight - 1000);
    element.forEach((e) => {
        if ((windowTop) > e.offsetTop) {
            e.classList.add("animation");
        } else {
            e.classList.remove("animation");
        }
    });
    if ((windowTop) > element2.offsetTop) {
        element2.classList.add("animation-text-info");
    } else {
        element2.classList.remove("animation-text-info");
    }
    if ((windowTop) > (element3.offsetTop + 700)) {
        element3.classList.add("animation-text-info");
    } else {
        element3.classList.remove("animation-text-info");
    }

}

window.addEventListener("scroll", () => {
    animeScroll(target, elementDivText, elementDivText2);
});


menuMobile.addEventListener("click", () => {
    if (options.classList.contains("optionsMenu")) {
        options.classList.remove("optionsMenu")
    } else {
        options.classList.add("optionsMenu")
    }
});