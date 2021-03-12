const mockUp = [
  {id: 1, "name": "Man in the mirror", "artist": "Michael Jackson", "genre": "pop", "duration": 4.24, "isChecked": false},
  {id: 2, "name": "Heart break hotel", "artist": "Elvis", "genre": "rock-and-roll", "duration": 2.08, "isChecked": false},
  {id: 3, "name": "Such a night", "artist": "Elvis", "genre": "pop", "duration": 2.55, "isChecked": false}
]

const validation = (inputs) => {
  const errors = {}
  if(!inputs[0].value) {
    errors.name = "name must not be empty"
  }
  if(!inputs[2].value.length < 3) {
    errors.genre = "genre must have more than 3"
  }
  if (!inputs[3].value) {
    errors.duration = "duration must not be empty"
  }
  return Object.keys(errors).length && errors
}

const addNewEntry = (dataArray, event) => {
  event.preventDefault();
  //create new object
  let newObject = {id: dataArray.length + 1}
  let formElements = document.getElementsByClassName('form-el')
  if(validation(formElements)) {
    return alert(Object.values(validation(formElements)).join(', '))
  }

  newObject.name = formElements[0].value
  newObject.artist = formElements[1].value
  newObject.genre = formElements[2].value
  newObject.duration = formElements[3].value
  newObject.isChecked = false
  //pushing to array 
  dataArray.length = dataArray.length + 1
  dataArray.push(newObject)
  //re-rendering
  onRender(mockUp)
}

const sortTable = (element, tableData) => {
  const fieldName = element.innerHTML, direction = element.getAttribute('data-direction')

  onRender(tableData.sort((a, b) => {
    if(a[fieldName] < b[fieldName]) {
      return 1 * direction
    } else if(a[fieldName] > b[fieldName]) {
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
    for(let key in line){
      const td = document.createElement('td')
      if(key === 'isChecked') {
        const input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        input.value = line[key]
        tr.append(input)
      } else {
        td.innerHTML = line[key]
        tr.append(td)
      }
    }
    tableBody.append(tr)
  })
}

onRender(mockUp)

//event listener for submit button - add.
const form = document.getElementById("myForm");
form.addEventListener('submit', event => addNewEntry(mockUp, event))

const columnHeadings = document.querySelectorAll('thead > tr > th')

columnHeadings.forEach(item => {
  item.addEventListener('click', () => sortTable(item, mockUp))
})

//****************FILTER*******************//
const myInputs = document.getElementsByClassName('form-el')

for (let i = 0; i < myInputs.length; i++) {
  myInputs[i].addEventListener('keyup', () => {
    const value = myInputs[0].value
    const data = searchName(value, mockUp)
    onRender(data)
  })
}

function searchName(value, data) {
  let filteredData = []

  for (let i = 0; i < data.length; i++) {
    value = value.toLowerCase()
    const name = data[i].name.toLowerCase()

    if (name.includes(value)) {
      filteredData.push(data[i])
    }
  }
  return filteredData
}
