const mockUp = [
  {id: 1, "name": "Man in the mirror", "artist": "Michael Jackson", "genre": "pop", "duration": 4.24, "isChecked": false},
  {id: 2, "name": "Heart break hotel", "artist": "Elvis", "genre": "rock-and-roll", "duration": 2.08, "isChecked": false},
  {id: 3, "name": "Such a night", "artist": "Elvis", "genre": "pop", "duration": 2.55, "isChecked": false}
]

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