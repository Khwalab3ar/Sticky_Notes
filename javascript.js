const add_note = document.querySelector('#add-note')
const notes = document.querySelector(".notes")
const exit = document.querySelector(".exit")
//add_note.addEventListener("click", function () {
//    add_note.style.backgroundColor = 'blue'
//})

add_note.addEventListener("click", function () {
    //new_note = prompt("Enter your note:")
    const exit = document.createElement('div')
    const createDiv = document.createElement('div')
    exit.setAttribute('class', 'exit')
    createDiv.setAttribute('class', 'note')
    exit.style.backgroundColor = '#fff'
    exit.textContent = 'X'
    createDiv.style.backgroundColor = '#94bca9'
    createDiv.appendChild(exit)
    //createDiv.textContent = new_note
    notes.appendChild(createDiv)
})

exit.addEventListener("click", function () {
    exit.parentElement.remove()
    console.log('printed')
})