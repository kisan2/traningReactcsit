import React, { useEffect, useState } from 'react'
import ImageOne from '../assets/imageone.jpg'
function Home() {
    const [index,setIndex]=useState(0)
    const ImageData=[
        {
            image:ImageOne
        },
        {
            image:'https://images.unsplash.com/photo-1733077151802-aa1330bfc533?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            image:'https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            image:'https://images.unsplash.com/photo-1733320929188-d8b7a96adba4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]

    const Next=()=>{
        if(index===ImageData.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }

    }

    useEffect(()=>{
let interval=setTimeout(() => {
    Next()
}, 2000);
return()=>{
    clearTimeout(interval)
}
    },[index])
  return (
    <div>
        <div className='w-full relative overflow-clip h-[85vh] '>
            {
                ImageData.map((val,i)=>{
                    return(
                        <img src={val.image} alt='slider' 
                        className={`h-full absolute top-0 z-10 left-0 w-full ${i==index?"translate-x-0":"-translate-x-[10000px]"} 
                        transition-all duration-1000 delay-100 ease-in-out
                        object-cover`} />
                    )
                })
            }
        </div>
        <div>
            <button className='h-fit w-fit px-8 py-2 bg-primary mt-10' onClick={()=>{
                Next()
            }}>Next</button>
        </div>
    </div>
  )
}

export default Home
