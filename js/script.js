// mi hat nkar, mi hat button ... onclick nkary poxvi
let on = document.querySelector(".on")
let off = document.querySelector(".off")
let img = document.querySelector("img")


on.onclick = () => {
   img.src = "img/pic_bulbon.gif"
}
off.onclick = () => {
   img.src = "img/pic_bulboff.gif"
}
