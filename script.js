const mockUp = [
  {id: 1, "name": "Man in the mirror", "artist": "Michael Jackson", "genre": "pop", "duration": 4.24},
  {id: 2, "name": "Heart break hotel", "artist": "Elvis", "genre": "rock-and-roll", "duration": 2.08},
  {id: 3, "name": "Such a night", "artist": "Elvis", "genre": "pop", "duration": 2.55}
]

const checkedFields = new Set([])

const validation = (inputs) => {
  const errors = {}
  if (!inputs[0].value) {
    errors.name = "name must not be empty"
  }
  if (inputs[2].value.length < 3) {
    errors.genre = "genre must have more than 3"
  }
  if (!inputs[3].value) {
    errors.duration = "duration must not be empty"
  }
  return Object.keys(errors).length && errors
}

//****************CHECKED*******************//

const addHandlersToCheckboxes = () => {
  const myCheckedInputs = document.querySelectorAll('input[type=checkbox]')
  myCheckedInputs.forEach(inputEl => {
    inputEl.addEventListener('click', () => {
      const currentId = inputEl.parentElement.querySelector('td').innerHTML
      if (checkedFields.has(currentId)) {
        checkedFields.delete(currentId)
      } else {
        checkedFields.add(currentId)
      }
      console.log(checkedFields)
      onRender(mockUp)
    })
  })
}

const addNewEntry = (dataArray, event) => {
  event && event.preventDefault()
  //create new object
  let newObject = {id: dataArray.length + 1}
  let formElements = document.getElementsByClassName('form-el')
  if (validation(formElements)) {
    return alert(Object.values(validation(formElements)).join(', '))
  }

  newObject.name = formElements[0].value
  newObject.artist = formElements[1].value
  newObject.genre = formElements[2].value
  newObject.duration = formElements[3].value
  //pushing to array 
  dataArray.length = dataArray.length + 1
  dataArray.push(newObject)
  //re-rendering
  onRender(mockUp)
}

const sortTable = (element, tableData) => {
  const fieldName = element.innerHTML, direction = element.getAttribute('data-direction')

  onRender(tableData.sort((a, b) => {
    if (a[fieldName] < b[fieldName]) {
      return 1 * direction
    } else if (a[fieldName] > b[fieldName]) {
      return -1 * direction
    } else {
      return 0
    }
  }))
  element.setAttribute('data-direction', direction * -1)
}

const onRender = dataArray => {
  const tableBody = document.querySelector('tbody')
  tableBody.innerHTML = ''

  dataArray.map(line => {
    const tr = document.createElement('tr')

    for (let key in line) {
      const td = document.createElement('td')
      if (checkedFields.has(String(line['id'])) && key !== 'id') {
        const editInput = document.createElement('input')
        editInput.setAttribute('type', 'text')
        editInput.setAttribute('value', line[key])
        editInput.setAttribute('name', key)
        td.append(editInput)
      } else if (key === 'id') {
        tr.setAttribute('id', 'line_' + line['id'])
        td.innerHTML = line[key]
      } else {
        td.innerHTML = line[key]
      }
      tr.append(td)
    }
    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.checked = checkedFields.has(String(line.id))
    tr.append(input)

    tableBody.append(tr)
  })
  addHandlersToCheckboxes()
}

onRender(mockUp)

//event listener for submit button - add.
const form = document.getElementById("myForm")
form.addEventListener('submit', event => {
  newLine =
  addNewEntry(mockUp, event, newLine)
})

const columnHeadings = document.querySelectorAll('thead > tr > th')

columnHeadings.forEach(item => {
  item.addEventListener('click', () => sortTable(item, mockUp))
})

//****************FILTER*******************//
const myInputSearch = document.getElementById('search')
myInputSearch.addEventListener('input', () => {
  const value = myInputSearch.value
  const data = searchName(value, mockUp)
  onRender(data)
})


function searchName(value, data) {
  return data.filter((item) => {
    for (let key in item) {
      if (item[key].toString(10).toLowerCase().includes(value.toLowerCase())) return true
    }
    return false
  })
}

//****************DELETE*******************//

function removeEntry(data) {
  const newData = data.filter((item) => {
    if (!checkedFields.has(item['id'].toString())) return true
  })
  return newData
}

const deleteBtn = document.getElementById('delete')
deleteBtn.addEventListener('click', () => {
  const data = removeEntry(mockUp)
  onRender(data)
})

//****************EDIT*******************//

function edit(data) {
  const editInputsArray = []
  checkedFields.forEach(number => {
    const editLineInputs = document.querySelectorAll(`#line_${number} > td > input[type=text]`)
    const lineObject = {}
    editLineInputs.forEach((input) => {
      lineObject[input.getAttribute('name')] = input.value
    })
    lineObject.id = Number(number)
    editInputsArray.push(lineObject)
  })

  checkedFields.clear()

  onRender(data.map(line => {
    editInputsArray.map(changedLine => {
      if (line.id === changedLine.id) {
        for (let key in line) {
          line[key] = changedLine[key]
        }
      }
    })
    return line
  }))
}

//****************NEW EDIT*******************//

function newEdit(data) {
  // loop with onRender with push edits lines
  // loop with removeEntry
  // sortTable by id
}

const editBtn = document.querySelector('#edit')
editBtn.addEventListener('click', () => edit(mockUp))