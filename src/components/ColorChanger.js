// 
import React,{useState} from 'react'

function ColorChanger() {
    const[color,setColor]=useState('')
  return (
    <div style={{
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px',
      }}>
        <h1>ColorChanger</h1>
        <select style={{backgroundColor:color,padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}}  onChange={(e)=>setColor(e.target.value)}>
        <option value={'red'}>red</option>
  <option value={'blue'}  >blue</option>
  <option value={'green'}  >green</option>
  <option value={'orange'} >orange</option>
        </select>
        <br />
        <br />
        <br />
        <br />
        <div style={{
background:color,         
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '20px'
  }}>

        </div>
    </div>
  )
}

export default ColorChanger