import { name } from '../mylib'

function component() {
    const hello = "Hello"
    const element = document.createElement('div')

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = hello.concat(' ', name())

    return element
}

document.body.appendChild(component())