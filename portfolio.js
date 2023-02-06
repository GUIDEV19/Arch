const opacity = document.getElementsByClassName("opacity")
const text = document.getElementsByClassName("text")

for(let i = 0; i < opacity.length; i++){
        opacity[i].addEventListener("mouseover", () => {
            setTimeout(() => {
                text[i].style.transition = "1s"
                text[i].style.opacity = "1"
            },80)
        });
}

// mouseout
// mouseover