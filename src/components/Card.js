import React, { useState } from 'react'
// import "./card.css"
function Card(props) {
const [show,setShow]=useState(false)
    const overHandler=()=>{
setShow(true)
window.alert(props.description,props.img)
    }
  return (<>
 <div key={props.id} className="card mt-3 mx-2" style={{width: "18rem",display:"inline-block"}}>
 <button key={props.id} onClick={overHandler}>
  <img  style={{maxHeight:"60%"}} src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
   
   
    
   
  </div>
   </button>
</div>
    </>
  )
}

export default Card
