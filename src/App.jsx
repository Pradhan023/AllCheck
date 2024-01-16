import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navlink from './Component/AllComp/Navlink'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navlink/>
      </BrowserRouter>
    </div>
  )
}

export default App