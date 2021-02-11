const left = document.querySelector(".left");
const rigth = document.querySelector(".right");
const container = document.querySelector(".conatainer");

left.addEventListener("mouseenter", () =>{
    container.classList.add("hover-left")
})

left.addEventListener("mouseleave", () =>{
    container.classList.remove("hover-left")
})

rigth.addEventListener("mouseenter", () =>{
    container.classList.add("hover-right")
})
rigth.addEventListener("mouseleave", () =>{
    container.classList.remove("hover-right")
})