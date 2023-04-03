

let trailers_main = document.querySelector(".trailers_main")
let back = document.querySelector('.back')

trailers_main.onmouseenter = () => {
    back.classList.add("active")
}
trailers_main.onmouseleave = () => {
    back.classList.remove("active")
}




const btns = document.querySelectorAll('img[data-color')

console.log(btns);


const imges = {
    mulan: "public/image/mulan.png",
    farsaj: "public/image/farsaj.png",
    baba: "public/image/baba.png",
    antibaba: "public/image/antibaba.png"
}




btns.forEach(item => {
    item.onclick = () => {
        let photo = item.getAttribute('data-color')
        trailers_main.style.background = `url(${imges[photo]}) no-repeat center top /contain`
    }
})
