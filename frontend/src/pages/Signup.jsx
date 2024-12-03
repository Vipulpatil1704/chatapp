import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import GenderCheckBox from '../component/GenderCheckBox'
import { useSignup } from '../hooks/useSignup.js';

export default function () {
  const {loading,signup} =useSignup();
  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    gender:''
  });
  function handleSetGender(e){
    setFormData({...formData,gender:e.target.name});
  }
  async function onsubmitHandler(e){
    e.preventDefault();
    //first step is to check for validations (all input fields must be entered then password and confirm password should match) and then makes an api call.
    //to do all this things we will do by using custom hook.
    await signup(formData.username,formData.email,formData.password,formData.confirmPassword,formData.gender);
  }
  return (
    <div className='flex flex-col w-2/5 gap-2 p-4 bg-slate-200 rounded'>
            <h1 className='text-3xl'>Signup to <span className='text-blue-400'>chat application</span></h1>
            <form className='flex flex-col gap-2' onSubmit={onsubmitHandler}>
                <label>Username</label>
                <input className='input input-bordered w-full' type="text" placeholder='Enter Username' value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})}/>
                <label>Email</label>
                <input className='input input-bordered w-full' type="email" placeholder='Enter Email' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
                <label>Password</label>
                <input className='input input-bordered w-full' type="password" placeholder='Enter Password' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
                <label>Confirm Password</label>
                <input className='input input-bordered w-full' type="password" placeholder='Enter Password' value={formData.confirmPassword} onChange={(e)=>setFormData({...formData,confirmPassword:e.target.value})}/>
                <GenderCheckBox gender={formData.gender} setGender={handleSetGender} />
                <Link>Don't have an account?</Link>
                <button type='submit' className='btn btn-primary' disabled={loading}>{loading ?<span className='loading loading-spinner'>
                </span> : "sign up"}</button>
            </form>
        </div>
  )
}
