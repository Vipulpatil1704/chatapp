import {useState} from 'react'
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
    <div className='auth-page'>
      <div className='auth-card'>
        <section className='auth-intro'>
          <div><p className='text-xs font-bold uppercase tracking-widest text-teal-200'>Convo</p><h1 className='mt-5 text-4xl font-bold'>Your people, one thoughtful space.</h1></div>
          <p className='text-sm leading-6 text-teal-100'>Start a lighter, more personal way to stay connected.</p>
        </section>
        <section className='auth-form'>
            <p className='text-sm font-semibold text-teal-700'>Get started</p><h2 className='mt-2 text-3xl font-bold'>Create your account</h2>
            <form className='mt-5' onSubmit={onsubmitHandler}>
                <label>Username</label>
                <input type="text" placeholder='Your name' value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})}/>
                <label>Email</label>
                <input type="email" placeholder='you@example.com' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
                <label>Password</label>
                <input type="password" placeholder='Create a password' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
                <label>Confirm password</label>
                <input type="password" placeholder='Repeat your password' value={formData.confirmPassword} onChange={(e)=>setFormData({...formData,confirmPassword:e.target.value})}/>
                <GenderCheckBox gender={formData.gender} setGender={handleSetGender} />
                <button type='submit' className='primary-action mt-2' disabled={loading}>{loading ? 'Creating account...' : 'Create account'}</button>
            </form>
        </section>
      </div>
    </div>
  )
}
