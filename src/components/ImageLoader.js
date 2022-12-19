// import React, { Component } from 'react'
// import './imageLoader.css'



// class ImageLoader extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          Image1:'',
//          Image2:'',
//          Image3:''
//       }
//     }
//     handleImage1= (event)=>{
//        this.setState({
//         Image1:event.target.value
//        })
//     }
//     handleImage2= (event)=>{
//         this.setState({
//          Image2:event.target.value
//         })
//      }
//      handleImage3= (event)=>{
//         this.setState({
//          Image3:event.target.value
//         })
//      }
//      handleSubmit= (event)=>{

//         <div>
//         <img
//           src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
//           alt="car"
//         />
//       </div>
//         event.preventDefault()
//      }
//   render() {
//     return (
//      <form className='primary' onSubmit={this.handleSubmit}>
//         <div>
//             <label>Image url1</label><br />
//             <input type='text' value={this.state.Image1} onChange={this.handleImage1} />
//             </div>
//             <div>
//             <label>Image url2</label><br />
//             <input type='text' value={this.state.Image2} onChange={this.handleImage2} />
//             </div>
//             <div>
//             <label>Image url3</label><br />
//             <input type='text' value={this.state.Image3} onChange={this.handleImage3} />
//         </div><br />
//         <button type="submit">show image</button>
//         <div>
            

//         </div>
//      </form>


     
//     )
//   }
// }

// export default ImageLoader
import React,{useState} from 'react'

function ImageLoader() {
    //const[count,setCount] = useState(0)
    const[url1,seturl1]=useState('');
    const[url2,seturl2]=useState('');
    const[url3,seturl3]=useState('');
    const[display,setdisplay]=useState(false);

    const handleSubmit= (e) => {
        setdisplay(true)
        e.preventDefault()
    }
   
  return (
    <div>
                    <form style={{
  borderRadius: '5px',
  backgroundColor: '#f2f2f2',
  padding: '20px',
  
}} onSubmit={handleSubmit}>
              <label><h5>Image url1</h5></label><br />
               <input style={{backgroundColor:'white',padding: '14px 20px',margin: '8px 0',width:'30%',placeHolder:'image url 1',
  border: 'none',borderRadius: '4px'}} type='text' value={url1} onChange={(event)=>seturl1(event.target.value)} /><br />
               <label><h5>Image url2</h5></label><br />
               <input style={{backgroundColor:'white',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}} type='text' value={url2} onChange={(event)=>seturl2(event.target.value)} /><br/>
               <label><h5>Image url3</h5></label><br />
               <input style={{backgroundColor:'white',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}} type='text' value={url3} onChange={(event)=>seturl3(event.target.value)} /><br /><br />
               <button style={{backgroundColor:'green',padding: '14px 20px',margin: '8px 0',width:'30%',
  border: 'none',borderRadius: '4px'}} type="submit"><h5>Show Image</h5></button><br />
               </form>
               <div><br />
               {display? <img style={{border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '5px',
  width: '150px'}} src={url1} alt='flower'/>:null}
                
                {display?  <img style={{border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '5px',
  width: '150px'}} src={url2} alt='flower'/>:null}
               
              
              {display? <img style={{border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '5px',
  width: '150px'}}src={url3} alt='flower'/>:null}
 
               </div>
               
              </div>
              
  
      
  )
}

export default ImageLoader