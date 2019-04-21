import './style.css'

console.log('js loaded')

function addAAA(elem) {
    elem.innerHTML = 'AAA'
}

var minshCtn = document.getElementById('minsh-container')
minshCtn.classList.add('red-color-div')
addAAA(minshCtn)