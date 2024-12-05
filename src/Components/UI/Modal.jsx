import React from 'react'

function Modal({LoginShow,setLoginShow,children}) {
  return (
   <div className='relative'>
     <div className={`w-fit border h-fit p-10 bg-white shadow-xl shadow-gray-300
        ${LoginShow?"translate-y-0":"-translate-y-[1000px]"} transition-all duration-700 delay-75 ease-in-out
        fixed top-10 z-50 left-0 right-0 mx-auto`}>
      <div>
        {children}
      </div>

      <div onClick={()=>{
        setLoginShow(false)
      }} className='absolute -top-3 -right-5 text-white flex items-center justify-center rounded-full bg-red-500 h-10 w-10'>
      X
      </div>
      
    </div>
   </div>
  )
}

export default Modal
