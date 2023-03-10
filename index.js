const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList =   document.querySelector('#time-list');
const timeEl = document.querySelector('.time')
const board = document.querySelector('#board')

let color = ['red','green','blue','pink','yellow']
let time = 0;
let score = 0;

startBtn.addEventListener('click', event => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')) {
       time = parseInt(event.target.getAttribute('data-time'))
       screens[1].classList.add('up');
       startGame()
    }
})

board.addEventListener('click', event => {
        if(event.target.classList.contains('circle')) {
            score++
            event.target.remove()
            createRandomCircle()
        }
})


function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
     setTime(time)
}
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
    if(value < 10) {
           timeEl.innerHTML = `00:0${value}`
}
function decreaseTime() {
    if(time === 0) {
        finishGame()
    } else  {
        let current = --time
        if(current < 10) {
            current = `0${current}`
        }
        setTime(current) 
    }
}

function finishGame() {
    timeEl.parentNode.remove()
    board.innerHTML = `<h1>ะกััั: <span class="primary">${score}</span></h1>`
}
function createRandomCircle() {
    const circle = document.createElement('div')

    const color = getRandomColor()
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.classList.add('circle')

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = `${color}`


    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
function getRandomColor() {
    return color[Math.floor(Math.random() * color.length)]
}

