import React, { useState, createContext } from 'react'
import './App.css' // import css styling, apply it on className props (in HTML, the term is attributes)

import Calculator from './Add'
import Tree from './Tree'
import Complex from './Complex'
import Async from './Async'
// ui
import PracticeContext from './Context'
// context createion
import CreateContext from './CreateContext'
// useEffect
import PracticeUseEffect from './PracticeUseEffect'

// react-router . SPA Concept
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Order from './Order'

// Note  8/10/2020 : 
// Sample ContextApi (useContext)

const App = () => { 
  const [color, setColor] = useState('green')

  return <CreateContext.Provider value={color}>

    <div className={App}>
      {/* <button onClick={()=> setColor('red') }> Update Context Value to 'red' </button> */}

      {/* <Calculator /> */}
      {/* <Tree /> */}
      {/* <Complex /> */}
      {/* <Async /> */}
      {/* <PracticeContext /> */}
      {/* <PracticeUseEffect /> */}

      {/* Router example */}
      <Router>
        <Switch>
          <Route exact path='/'>
            <Calculator />
          </Route>
          <Route exact path='/page1'>
            <Tree />
          </Route>
          <Route exact path='/page2'>
            <Complex />
          </Route>
          {/* Dynamic router path */}
          <Route path='/order/:id'>
            <Order />
          </Route>
        </Switch>
      </Router>

    </div>
  </CreateContext.Provider>
}

      
export default App

// Note  7/10/2020 : 
// const App = () => ( <div> </div>) 
// const App = () => { return <div> </div> }

// Note  8/10/2020 : 
/* -----------------------------
<ContextProvider>
  <ThemeProvider>
    <ConfigProvider>
      <MoreProvider>
        <App />
      </MoreProvider>
    </ConfigProvider>
  </ThemeProvider>
</ContextProvider>

Use multiple provider to control global state, props,
routing, styling and much more !!!!!!!
-----------------------------------*/
