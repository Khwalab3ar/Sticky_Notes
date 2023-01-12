const add_note = document.querySelector('#add-note')
const notes = document.querySelector(".notes")
const form = document.querySelector("#popup-form")
    

//click add notes
const clickNote = () =>{
    form.style.display = "inline"
    notes.style.opacity = ".5"
}
//Create new sticky notes
const createNotes = () =>{
    event.preventDefault()
    form.style.display = "none"
    notes.style.opacity = "1"
    userInput = document.forms["sticky-note"]["inputNotes"].value
    const exit = document.createElement('div')
    const para = document.createElement('p')
    exit.setAttribute('class', 'exit')
    const createDiv = document.createElement('div')
    createDiv.setAttribute('class', 'note')
    exit.style.backgroundColor = '#fff'
    exit.textContent = 'X'
    createDiv.style.backgroundColor = '#94bca9'
    para.textContent = userInput
    createDiv.appendChild(exit)
    createDiv.appendChild(para)
    notes.appendChild(createDiv)
    exitNotes()
}
//Delete existing sticky notes
const exitNotes = () =>{
    const exits =  document.querySelectorAll(".exit")
    exits.forEach((e)=>{
        e.addEventListener("click", function () {
            e.parentElement.remove()
        })
    })
}


add_note.addEventListener("click", clickNote)


