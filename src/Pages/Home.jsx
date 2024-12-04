import React, { useState } from 'react'

function Home() {

    const [abc,setabc]=useState(1)
  
  return (
    <div>
   Home {abc}
      <button onClick={()=>{
        setabc(abc+1)
      }}>add</button>
    </div>
  )
}

export default Home
