const add_note = document.querySelector('#add-note')
const notes = document.querySelector(".notes")
//add_note.addEventListener("click", function () {
//    add_note.style.backgroundColor = 'blue'
//})

add_note.addEventListener("click", function () {
    add_note.style.backgroundColor = 'blue'
    const createDiv = document.createElement('div')
    createDiv.setAttribute('class', 'note')
    createDiv.style.backgroundColor = '#edae6f'
    notes.appendChild(createDiv)
})