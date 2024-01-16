import React, { useState } from 'react'
import { useFormik } from 'formik'
import { registration } from '../schemas'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const initialvalue = {
  name:'',
  email:'',
  password:'',
  confirmpassword:''
}

const Formval = () => {
  const[show,setShow] = useState(false)

  const {values , errors , touched , handleBlur , handleChange , handleSubmit } = useFormik({
    initialValues:initialvalue,   
    validationSchema:registration,
    onSubmit:(values,action)=>{
      console.log(values);
      action.resetForm();
    }
  })
  console.log( errors);

  return (
    <div className="bgformimg h-screen flex justify-center" >
      <form onSubmit={handleSubmit} className="flex flex-col backdrop-blur-lg w-96 lg:mt-16 pb-24 px-10 h-fit">
        <div className="flex justify-center mt-2 mb-4"><CgProfile className="text-white text-[7rem] " /></div>
        <label htmlFor='name' className="text-white ml-2 mb-1">Name</label>
        <input type='text' name='name' id='name' autoComplete='off' value={values.name} onChange={handleChange} 
        onBlur={handleBlur} placeholder='Enter Your Name' className="h-11 rounded-full px-4 bg-transparent border-2 placeholder:text-white outline-none text-white" />
        {errors.name && touched ? <p className="text-red-600 text-sm ml-2 mt-1">{errors.name}</p> : null}<br/>

        <label htmlFor='email' className="text-white ml-2 mb-1">Email</label>
        <input type='email' name='email' id='email' autoComplete='off' value={values.email} onChange={handleChange} 
        onBlur={handleBlur} placeholder='Enter Your Email' className="h-11 rounded-full px-4 bg-transparent border-2 placeholder:text-white outline-none text-white" />
        {errors.email && touched ? <p className="text-red-700 text-sm ml-2 mt-1">{errors.email}</p> : null}<br/>

        <label htmlFor='password' className="text-white ml-2 mb-1">Password</label>
        <div className="relative"><input type={show?'text':'password'} name='password' id='password' value={values.password} onChange={handleChange} 
        onBlur={handleBlur} autoComplete='off' placeholder='Enter Your Password' className="w-full pl-4 pr-9 h-11 rounded-full  bg-transparent border-2 placeholder:text-white outline-none text-white" /><span className="absolute right-3 top-3" onClick={()=>setShow(!show)}>{show?<FaRegEyeSlash className="text-white cursor-pointer" />:<FaRegEye className="text-white cursor-pointer" />}</span></div>
        {errors.password && touched ? <p className="text-red-700 text-sm ml-2 mt-1">{errors.password}</p> : null}<br/>

        <label htmlFor='confirmpassword' className="text-white ml-2 mb-1">Confirm Password</label>
        <div className="relative"><input type={show?'text':'password'} name='confirmpassword' id='confirmpassword' value={values.confirmpassword} 
        onChange={handleChange} onBlur={handleBlur} autoComplete='off' placeholder='Enter Your Confirm Password'className="w-full pl-4 pr-9 h-11 rounded-full  bg-transparent border-2 placeholder:text-white outline-none text-white"  /><span className="absolute right-3 top-3 " onClick={()=>setShow(!show)}>{show?<FaRegEyeSlash className="text-white cursor-pointer" />:<FaRegEye className="text-white cursor-pointer"/>}</span></div>
        {errors.confirmpassword && touched ? <p className="text-red-700 text-sm ml-2 mt-1">{errors.confirmpassword}</p> : null}<br/>

        <button type='submit' className="border text-white cursor-pointer py-2 text-xl bg-cyan-600 border-none rounded-full" >Submit</button>
      </form>
    </div>
  )
}

export default Formval