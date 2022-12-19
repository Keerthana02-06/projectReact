import React,{useState} from 'react'

function GoogleNotes() {
    const[text1,setText1]=useState('')
    const[text2,setText2]=useState('')
    const[display,setdisplay]=useState(false)
    const handleDelete=(e)=>
    {
        setText1('')
        setText2('')
    }
  return (
    <div><div>
    <label>Name</label><br />
           <input type='text' value={text1} onChange={(event)=>setText1(event.target.value)} /><br />
           <input type='text' value={text2} onChange={(event)=>setText2(event.target.value)} /><br />
           <button onClick={(e)=>{setdisplay(true)}}>Add</button>
           </div>
           <div style={{float:'left'}}>
           {display?<h1>{text1}</h1>:null}
           {display?<h1>{text2}</h1>:null}
           <button onClick={handleDelete}>DELETE</button>
           </div>
           </div>
          
           
  )
}

export default GoogleNotes