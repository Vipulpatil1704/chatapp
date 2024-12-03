import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin';

export default function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {login}=useLogin();
    async function handleSubmitHandler(e){
        e.preventDefault();
        await login(email,password);

    }
    return (
        <div className='flex flex-col w-2/5 gap-2 p-4 bg-slate-200 rounded login-container'>
            <h1 className='text-3xl'>Login to <span className='text-blue-400'>chat application</span></h1>
            <form className='flex flex-col gap-2' onSubmit={handleSubmitHandler}>
                <label htmlFor="email">Email</label>
                <input className='input input-bordered w-full' type="email" placeholder='Enter Email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input className='input input-bordered w-full' type="password" placeholder='Enter Password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Link to={'/signup'}>Don't have an account?</Link>
                <button className='btn btn-primary'>Login</button>
            </form>
        </div>
    )
}
