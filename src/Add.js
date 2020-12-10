import React, { useState } from 'react'
import './App.css' // import css styling, apply it on className props (in HTML, the term is attributes)

// Note  7/10/2020 : 
// or you can create style object
const btnStyle={
  padding: '20px',
  margin: '10px'
}

const totalStyle={
  padding: '20px',
  margin: '10px',
  color: 'black'
}

const info = { 
  name: '', 
  family: ''
}

const Calculator = () => {

  // Initial State
  const [total, setTotal] = useState(0)
  const [name, setName] = useState('')
  const [infoState, setInfoState] = useState(info)

  // Function
  const handleName = (event) => {
    console.log(event.target)
    setName(event.target.value)
  }

  const handleInfoName = (event) => {
    console.log(event.target)
    setInfoState({
      name: event.target.value,
      family: infoState.family
    })
  }

  const handleInfoFamily = (event) => {
    console.log(event.target.value)
    setInfoState({
      name: infoState.name,
      family: event.target.value,
    })
  }

  const handleInfo = (event) => {

    // Note  7/10/2020 : 
    // watch this !!!
    console.log(event.target)
    const {name, value} = event.target
    
    const newInfo = {...infoState}
    switch(name){
      case 'name':
        newInfo.name = value
        break;
      case 'family' :
        newInfo.family = value
        break;
      default:
        break;
    }

    setInfoState(newInfo)
  }

  return(
    <div>
      <button type='button' 
        style={btnStyle} 
        className='Add'
        onClick={() => setTotal(total + 1)}>
          Add (+) 
      </button>

      <button type='button' 
        style={btnStyle} 
        className='Minus'
        onClick={() => setTotal(total - 1)}>
        Minus (-) 
      </button>
      {
        total < 0 ?
        <h1 style={{ ...totalStyle, color: 'red' }}> {total} </h1>  
        :  
        <h1 style={totalStyle}> {total} </h1>       
      }

      <input type='text' value={name} onChange={handleName}/>

      <h1> Hello: {name} </h1>

      <h3> Update your info </h3>

      <input type='text' value={infoState.name} onChange={handleInfo} name='name'/>
      <br />
      <input type='text' value={infoState.family} onChange={handleInfo} name='family'/>
      
      <h2> 
        Name: {infoState.name} 
        <br />  
        Family: {infoState.family}  
      </h2>
    </div>
  )
}

export default Calculator
