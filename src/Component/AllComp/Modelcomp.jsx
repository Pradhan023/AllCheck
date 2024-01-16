import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";

const Modelcomp = () => {
    const Content = useLocation().state
    const[pop,setPop] = useState(true)
    const[val,setVal] = useState(false)
    const[open,setOpen] = useState(false)
    const[editinput,seteditInput] =  useState(Content)
    const [input,setInput] = useState(editinput)

    const popclick = ()=>{
        setPop(!pop)
    }

    const editPOP = ()=>{
        setVal(!val)
        setOpen(!open)
    }

    const editHandle = ()=>{
        setInput(editinput)
        setVal(!val)
        setOpen(!open)
    }

  return (
    <div className="relative">
        <h1 onClick={popclick} className="text-cyan-600 text-center text-3xl pt-7 cursor-pointer">Click me</h1>
        

        {
            pop?"":
            <div className=" absolute top-0 flex justify-center items-center w-full h-screen bg-black opacity-80">
        {
            open?"" : 
            <div className="border bg-white w-fit py-8 px-4 relative">
                <IoMdClose onClick={popclick} className="absolute right-2 top-1 text-2xl"/>
                <div className="flex flex-col items-center gap-8">
                <h2 className="text-3xl">{input}</h2>
                <p className="bg-cyan-600 capitalize text-lg px-6 py-1 text-white cursor-pointer" onClick={editPOP}>edit</p>
                </div>
            </div>
        }
        {/*edit  */}
        <div className="relative">
        {
            val?
            <div className=" bg-white  px-4 py-6 h-44 w-96">
                <IoMdClose onClick={editPOP} className="absolute top-1 right-2 text-2xl " />
                <div className="flex flex-col gap-10 items-center mt-3">
                <input type='text' name='content' className="border-2 border-slate-400 h-10 px-3 w-[100%] text-black" value={editinput} onChange={(e)=>seteditInput(e.target.value)} />
                <button className="bg-cyan-600 text-white w-fit text-lg px-8 py-2" onClick={editHandle} >Edit</button>
                </div>
            </div>
            : null
        }
        </div>
    </div>
        }

    </div>
  )
}

export default Modelcomp