import React, { useState } from 'react'

const Page = (props) => {
    const [count,setCount]=useState(0)
    function countmin(){
        if (count>0) {
    // <Page ={previous} nextvalue={nextvalue}/>
    props.previousvalue()
    setCount(count-1)
        }
    }

    function countmax(){
        if(count<5){
            props.nextvalue()
            setCount(count+1)
        }
    }
  return (
    <div>
      <button onClick={countmin}>PRE</button>
      <span>{count}</span>
      <button onClick={countmax}>NEXT</button>
    </div>
  )
}

export default Page
