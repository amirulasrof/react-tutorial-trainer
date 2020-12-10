import React, { useEffect, useState } from 'react'

const PracticeUseEffect = () => {

  const [state, setState] = useState(0)
  const [changed, setChanged] = useState(false)

  const [login, setLogin] = useState(false)
  const [changed2, setChanged2] = useState(false)

  useEffect(() => {
    if(state > 0)
      setChanged(true)
  }, [state])

  useEffect(() => {
    if(login === 'admin')
      setChanged2(true)
    else
      setChanged2(false)
  }, [login])

  const handleChange = (event) => {
    setLogin(event.target.value)
  }

  return <div>
    <p> {state} </p> 
    <button onClick={() => setState(state + 1)}> Add  </button>
    <p> { changed ? 'The state has changed' : null} </p>

    <input type='text' placeholder='Type admin to show login' onChange={handleChange}/>
    {changed2 ? <button> Login </button> : null }
  </div>

}

export default PracticeUseEffect
