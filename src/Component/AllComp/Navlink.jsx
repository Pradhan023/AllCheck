import React, { useState } from 'react'
import Todo from './Todo'
import Home from './Home'
import Modelcomp from './Modelcomp'
import Formval from './Formval'
import { NavLink, Route, Routes } from 'react-router-dom'
import Chart from './Chart'

const Navlink = () => {
  return (
    <div>
        <div className=" flex text-white bg-cyan-900 justify-around py-4">
        <NavLink to='/' className={({ isActive, isPending }) => isActive ? "text-cyan-600" : isPending ? "text-black" :""} >HOME</NavLink>
        <NavLink to='/todolist' className={({ isActive, isPending }) => isActive ? "text-cyan-400" : isPending ? "text-black" :""} >TODO LIST</NavLink>
        <NavLink to='/formvald' className={({ isActive, isPending }) => isActive ? "text-cyan-400" : isPending ? "text-black" :""}  >FORM</NavLink>
        <NavLink to='/modal' className={({ isActive, isPending }) => isActive ? "text-cyan-400" : isPending ? "text-black" :""} state={"Hi i am modal component"}>MODAL</NavLink>
        <NavLink to='/chart' className={({ isActive, isPending }) => isActive ? "text-cyan-400" : isPending ? "text-black" :""}  >CHART</NavLink>
        </div>
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/todolist' element = {<Todo/>} />
            <Route path='/modal' element = {<Modelcomp/>} />
            <Route path='/formvald' element = {<Formval/>} />
            <Route path='/chart' element = {<Chart/>} />
        </Routes>
    </div>
  )
}

export default Navlink