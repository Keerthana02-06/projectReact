import React, { useState } from 'react'

function FeedBack() {
    const[text,setText]=useState('')
    const[text1,setText1]=useState('')
    const[display,setdisplay]=useState(false)

  return (
    <div>
        <div style={{
  borderRadius: '5px',
  backgroundColor: '#f2f2f2',
  padding: '20px',
}}
  >
        <label><b>Name</b></label><br />
               <input style={{backgroundColor:'white',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}} type='text' value={text} onChange={(event)=>setText(event.target.value)} /><br />
              <label><b>Feedback</b></label><br />
               <textarea style= {{backgroundColor:'white',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}}value={text1} onChange={(event)=>setText1(event.target.value)}  ></textarea><br />
               <button style={{backgroundColor:'orange',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}}onClick={(e)=>{setdisplay(true)}}>Post</button>
               </div><br/>
               <div style={{
  borderRadius: '5px',
  backgroundColor: '#f2f2f2',
  padding: '20px',
}}>
               {display?<h6>{text}</h6>:null}
               
               {display?<h6>{text1}</h6>:null}
               </div>
    </div>
  )
}

export default FeedBack