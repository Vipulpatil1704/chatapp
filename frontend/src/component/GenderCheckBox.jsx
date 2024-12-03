import React from 'react'

export default function GenderCheckBox({gender,setGender}) {
  
  return (
    <div className='flex gap-x-2 '>
        <label htmlFor="">Male</label>
        <input type="checkbox" name='male' checked={gender==='male'} onChange={(e)=>setGender(e)}  className="checkbox border-2" />
        <label htmlFor="">Female</label>
        <input type="checkbox" name='female' checked={gender==='female'}  onChange={(e)=>setGender(e)} className="checkbox border-2" />
    </div>
  )
}
