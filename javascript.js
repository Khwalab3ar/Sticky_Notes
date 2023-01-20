const add_note = document.querySelector('#add-note')
const notes = document.querySelector(".notes")
const form = document.querySelector("#popup-form")
const edit = document.querySelector("#edit")
    

//click add notes
const clickNote = () =>{
    form.style.display = "inline"
    notes.style.opacity = ".5"
}
//Create new sticky notes
const createNotes = () =>{
    event.preventDefault()
    const userInput = document.forms["sticky-note"]["inputNotes"].value
    form.style.display = "none"
    notes.style.opacity = "1"
    const createDiv = document.createElement('div')
    createDiv.setAttribute('class', 'note')
    createDiv.style.backgroundColor = '#94bca9'
    const exit = document.createElement('div')
    const para = document.createElement('div')
    const edit = document.createElement('div')
    exit.setAttribute('class', 'exit')
    edit.setAttribute('class', 'editbtn')
    exit.textContent = 'X'
    edit.textContent = 'Edit'
    exit.style.backgroundColor = '#fff'
    para.innerHTML = `<p>${userInput}</p>`
    createDiv.appendChild(exit)
    createDiv.appendChild(para)
    createDiv.appendChild(edit)
    notes.appendChild(createDiv)
    exitNotes()
    editNotes()

}
const updateNote = (editNote) => {
    event.preventDefault()
    const userInput = document.forms["edit-form"]["editNotes"].value
    edit.style.display = "none"
    notes.style.opacity = "1"
    editNote.children[1].innerHTML = `<p>${userInput}</p>`
    console.log(editNote)
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

const editNotes = () =>{
    event.preventDefault()
    const editForm =  document.querySelectorAll(".editbtn")
    const userInput = document.forms["edit-form"]["editNotes"].value
        editForm.forEach((e)=>{
            e.addEventListener("click", function () {
                edit.style.display = "inline"
                notes.style.opacity = ".5"
                document.getElementById("save").onsubmit = function(){updateNote(e.parentElement)}
            })
        })
}


add_note.addEventListener("click", clickNote)


