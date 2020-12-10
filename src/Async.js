import React, { useState, useEffect } from 'react'

const Async = () => {

  const [state, setState] = useState(true)

  useEffect(() => {
    timer()
  }, [])

  const timer = () => {
    setTimeout(() => {
      setState(false)
    }, 500);
  }

  return (
    <>
      {/* Run timer */}
      {/* {timer()} */}

      <div> {state ? 'TRUE' : 'FALSE'} </div>
      <h4>{ state ? 'Loading ...' : null}  </h4>
    </>
  )
}

export default Async