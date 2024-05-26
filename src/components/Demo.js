import React, { useEffect, useState } from 'react'
let i = 0;
let j=0;

const Demo = () => {

    const [data , setData] = useState(null)

    const handleClick =()=>{
         setData("Click handled" + j++)
    }

    useEffect(()=>{
        console.log("Use effect " + i++)
    } , [])

  return (
    <div>
     
        <h1> This is the component  {data}</h1>

        <button onClick={handleClick}>Click me </button>
    </div>
  )
}

export default Demo