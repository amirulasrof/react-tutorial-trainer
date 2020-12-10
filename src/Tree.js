import React, { useState, useEffect } from 'react'

// example of using outer component wow !

// props alternative
const Check1 = ({onChange, level1}) => (
  <input type="checkbox" onChange={() => onChange(!level1)} value={level1}/>
)

// props alternative
const Check2 = ({onChange, level2}) => (
  <div style={{ marginLeft: 20 }}>
    <input type="checkbox"/>
    <br/>
    <input type="checkbox" onChange={() => onChange(!level2)} value={level2}/>
  </div>
)

const Check3 = () => (
  <div style={{ marginLeft: 40 }}>
    <input type="checkbox"/> <br/>
    <input type="checkbox"/> <br/>
    <input type="checkbox"/>
  </div>
)

const Tree = () => {

  const [level1, setLevel1] = useState(false)
  const [level2, setLevel2] = useState(false)

  useEffect(() => {
    if(level1){
      setLevel2(false)
    }
  }, [level1])
  
  return (
    <>
      {console.log(level2)}   
      
      <Check1 onChange={setLevel1} level1={level1}/>

      <br/>
      { level1 ? <>
          <Check2 onChange={setLevel2} level2={level2}/>
          { level2 ? <Check3/> : null } 
        </> 
        : 
        null
      }
      
    </> 
  )  
}
export default Tree