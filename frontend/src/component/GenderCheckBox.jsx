export default function GenderCheckBox({gender,setGender}) {
  
  return (
    <div className='gender-options'>
      <label><input type="checkbox" name='male' checked={gender==='male'} onChange={(e)=>setGender(e)} /> Male</label>
      <label><input type="checkbox" name='female' checked={gender==='female'} onChange={(e)=>setGender(e)} /> Female</label>
    </div>
  )
}
