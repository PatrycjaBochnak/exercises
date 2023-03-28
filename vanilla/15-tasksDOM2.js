const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const square = document.querySelector('.square')

const fun1 = () => {
    console.log('cześć')
}
const fun2 = () => {
    square.style.background('tomato')
}
const fun3 = () => {
    square.style.background('royalblue')
}
const fun4 = () => {
    p1.classList.toggle('show')
    p2.classList.toggle('show')
}

btn1.addEventListener('dblclick', fun1)
square.addEventListener('mouseenter', fun2)
square.addEventListener('mouseleave',  fun3)
btn2.addEventListener('click', fun4)
