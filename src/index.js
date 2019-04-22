import './style.css'
import AAA from './classes/AAA.js'

console.log('js loaded')

var aaaInstance = new AAA('johndoe')

aaaInstance.loadToDOM((() => {
    var d = document.createElement('div')
    d.classList.add('red-color-div')
    document.querySelector('body').appendChild(d)
    return d
})()
)