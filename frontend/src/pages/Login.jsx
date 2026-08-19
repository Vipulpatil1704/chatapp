import { useState } from 'react'
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
                <div className='auth-page'>
                    <div className='auth-card'>
                        <section className='auth-intro'>
                            <div><p className='text-xs font-bold uppercase tracking-widest text-teal-200'>Convo</p><h1 className='mt-5 text-4xl font-bold'>Make room for better conversations.</h1></div>
                            <p className='text-sm leading-6 text-teal-100'>A calm, focused place to keep up with the people who matter.</p>
                        </section>
                        <section className='auth-form'>
                            <p className='text-sm font-semibold text-teal-700'>Welcome back</p><h2 className='mt-2 text-3xl font-bold'>Sign in to your account</h2>
                        <form className='mt-6' onSubmit={handleSubmitHandler}>
                                <label htmlFor="email">Email address</label>
                                <input type="email" placeholder='you@example.com' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder='Enter your password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                <Link className='auth-link mt-2' to={'/signup'}>New here? Create an account</Link>
                                <button className='primary-action mt-3'>Sign in</button>
            </form>
                        </section>
                    </div>
        </div>
    )
}
