export default class AAA {
    constructor(name) {
        this.name = name
        console.log('aaa\'s name is ' + this.name)
    }
    loadToDOM(dom) {
        dom.innerHTML = ('aaa has been loaded into this DOM element and the name is ' + this.name)
    }
}