import React,{useState} from 'react'

function CardCreate() {
    const[text1,setText1]=useState('')
    const[text2,setText2]=useState('')
    const[text3,setText3]=useState('')
    const[text4,setText4]=useState('')
    const[display,setdisplay]=useState(false)

    const handleDelete=(e)=>
    {
        setText1('')
        setText2('')
        setText3('')
        setText4('')
        setdisplay('')
    }
    
  return (
    <div style={{
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px'}}> <div>
    <label>Name</label><br />
           <input style={{backgroundColor:'white',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}} type='text' value={text1} onChange={(event)=>setText1(event.target.value)} /><br />
           <input style={{backgroundColor:'white',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}} type='text' value={text2} onChange={(event)=>setText2(event.target.value)} /><br />
           <input style={{backgroundColor:'white',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}} type='text' value={text3} onChange={(event)=>setText3(event.target.value)} /><br />
           <input style={{backgroundColor:'white',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}} type='text' value={text4} onChange={(event)=>setText4(event.target.value)} /><br />
           
           <button style={{backgroundColor:'green',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}} onClick={(e)=>{setdisplay(true)}}>Post</button>
           </div><br /><br />
           <div style={{
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px'}}>
               {display?<h6>{text1}</h6>:null}
               {display?<h6>{text2}</h6>:null}
               {display?<h6>{text3}</h6>:null}
               {display?<h6>{text4}</h6>:null}
               {display?<button style={{backgroundColor:'red',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}} onClick={handleDelete}>DELETE</button>:null}
               </div>
           </div>
  )
}

export default CardCreate