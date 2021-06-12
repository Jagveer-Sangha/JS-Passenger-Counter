// document.getElementById("count").innerText = 5
// let count = 5
// console.log(count)

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    // console.log("The button was clicked")
    count = count + 1
    countEl.textContent = count
    // console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}

