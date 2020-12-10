import React, { useContext } from 'react'
import CreateContext from './CreateContext'

const PracticeContext = () => {

  const ThemeProvider = useContext(CreateContext)
  console.log(ThemeProvider)

  return <div>
    {ThemeProvider}
    <br />
    {ThemeProvider}
    <br />
    {ThemeProvider}
  </div>

}

export default PracticeContext