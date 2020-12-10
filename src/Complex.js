import React, { useState, useEffect } from 'react'
import './App.css' // import css styling, apply it on className props (in HTML, the term is attributes)

const data = {
  status: 'Success',
  url: 'www.google.com',
  items: ['item1', 'item2', 'item3', 'item4', 'item5'],
  books: [
    {name: 'Lord of ', price: 200},
    {name: 'Hobbits ', price: 300},
    {name: 'Matrix', price: 100}
  ]
}

const Complex = () => {

  const [index, setIndex] = useState(0)
  const [state, setState] = useState(data)

  const handleIndex = () => {

    document.getElementById('input1').value = ''

    //if(index < data.items.length - 1)
    if(index < data.items.length)
      setIndex(index + 1)
    else  
      // setIndex(0)
      setIndex(1)
  }

  const handleChange = (event) => {
    console.log(event)
    const { value } = event.target
    
    const newState = {...state}

    newState.items[index - 1] = value
    setState(newState)
  }

  return( 
    <div>
      {data.items.map((item, i) => 
        <div style={{ backgroundColor: index - 1 == i ? 'red' : 'white' }}> 
          {item} 
        </div>
      )}

      <button onClick={handleIndex}> Index </button> 
      <div> {index} </div>
      <input type='text' onChange={handleChange} id='input1'/>
    </div>
  )
}

export default Complex