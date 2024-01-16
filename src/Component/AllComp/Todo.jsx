import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApiCall, addTodo, markdone, remove } from '../Feature/Slice'

const Todo= () => {
    const Data = useSelector(state=>state.Todo)
    const FetchApi =Data.todoContainer
    const dispatch = useDispatch()
    const inputRef =  useRef("")
    console.log(Data);
    useEffect(()=>{
        dispatch(ApiCall())
    },[])
    // console.log(FetchApi.data);

    const formHandle = (e)=>{
        e.preventDefault();
        dispatch(addTodo({name:inputRef.current.value , mark:false}));
        inputRef.current.value = ""
    }

    function dispatchfn(name,value){
       console.log(name,value);
       if(value == "mark")
       {
        dispatch(markdone(name))
       }
       if(value == "remove")
       {
        dispatch(remove(name))
       }
    }

  return (
    <div className="bgimg pb-5">
        <form className="flex justify-center lg:gap-9 gap-2 pt-4" onSubmit={formHandle}>
            <input className="border-2 h-10 w-6/12 pl-4 text-lg capitalize outline-blue-200" type='text' ref={inputRef}  placeholder='Type Your Todo Task' required /> 
            <button className="border lg:w-24 w-20 text-white bg-cyan-500 text-lg lg:font-bold"  type='submit' >ADD</button>
        </form>
        {
            FetchApi.isLoading === true ? <h1 className="text-center mt-8 text-3xl text-cyan-600">Loading ..... </h1>
            : 
            <div className="border mt-3 pt-3 flex flex-col gap-3 items-center">
                {
                    FetchApi.data?.map((item,index)=>{
                        return(
                            <div className="flex justify-between backdrop-blur-md border text-lg w-7/12 py-2 px-2" key={index}>
                            <p className={item.mark == true ? " line-through text-red-500" : ""} >{item.name}</p>
                            <div>
                            <input type='checkbox' onClick={()=>dispatchfn(item.id,"mark")} checked={item.mark} />
                            <span onClick={()=>dispatchfn(item.id,"remove")}>🚮</span>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        }
    </div>
  )
}

export default Todo