import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'

const Order = () => {
  // refer App.js
  let { id } = useParams()
  // useHistory store list of going pages
  let history = useHistory()

  // alert(JSON.stringify(history))

  return <div>
    {id}
    <br />

    {/* History */}
    <button onClick={()=> history.push('/') } > Go Back Home </button>

    <br />
    {/* Linkage */}
    <Link to='/'> Link to Home </Link>
  </div>
}

export default Order