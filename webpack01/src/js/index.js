import "../css/index.css"
import "../css/img.scss"
let divEl = document.createElement("div")
divEl.innerHTML = "党党"
divEl.className = 'title'
document.body.appendChild(divEl)

let divImgEl = document.createElement("div")
divImgEl.className = 'image-bg'
document.body.appendChild(divImgEl)


let darkPng = require("../assets/img/dark.png")
let thJpg = require("../assets/img/th.jpg")
// 插入图片
let imgPng = document.createElement("img")
let imgJpg = document.createElement("img")
imgJpg.src = darkPng
imgPng.src = thJpg

document.body.appendChild(imgJpg)
document.body.appendChild(imgPng)


let iconEl = document.createElement('div')
iconEl.className = 'iconfont icon-daxiang'
document.body.appendChild(iconEl)

