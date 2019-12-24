let notes = getSaveNotes()

const filters = {
    searchText : '',
    sortBy : 'byEdited'
}

filterNotes(notes, filters)

document.querySelector('#search-note').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    filterNotes(notes, filters)
})

document.querySelector('#sort-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    filterNotes(notes, filters)
})

// create note
document.querySelector('#addNote').addEventListener('click', (e) => {
    const id = uuidv4()
    const timeStamp = moment().valueOf()
    notes.push({
        id : id,
        title : '',
        body : '',
        createdAt : timeStamp,
        updatedAt : timeStamp
    })
    saveNotes(notes)
    location.assign(`edit.html#${id}`)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        filterNotes(notes, filters)
    }
})