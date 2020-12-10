import React from 'react'

const data = [
  { title: 'Buy Milk', selected: false },
  { title: 'Buy Milk', selected: false },
  { title: 'Buy Milk', selected: false },
]

const Todo = () => {
  return (
    <div>
      <button> Select All </button>
      <button> Unselect All </button>

      {data.map( i => (
        <>
          <input type='checkbox'>  </input>
          <h5> {i.title} </h5>
        </>
      ))}

    </div>
  )
}

