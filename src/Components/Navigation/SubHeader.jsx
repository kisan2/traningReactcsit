import React, { useState } from 'react' 
import { FaSearch } from "react-icons/fa";
import {Link, useLocation} from 'react-router-dom'
import Modal from '../UI/Modal';
function SubHeader() {
    const [Active,setActive]=useState(0)
    const [LoginShow,setLoginShow]=useState(false)
    const [RegisterShow,setRegisterShow]=useState(false)
    const location=useLocation();
    const navitem=[
        {
            title:"Home",
            path:"/"
        },
        {
            title:"Page",
            path:'/page'
        }, 
        {
            title:"Courses",
            path:'/courses'
        },
         {
            title:"Instructors",
            path:"/instructor"
        },
        {
            title:"Blog",
            path:'/blog'
        }, 
        {
            title:"contact",
            path:"/contact"
        },
    ]
  return (
    <div className='bg-white'>
         <Modal LoginShow={RegisterShow} setLoginShow={setRegisterShow} >
            <div className='w-96 flex flex-col gap-6'>
                <div className='font-bold text-2xl'>Register</div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label>Email</label>
                        <input type='email' className='border outline-none border-gray-300 py-2 px-4 placeholder:capitalize' placeholder='email' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Password</label>  
                        <input type='password' className='border outline-none border-gray-300 py-2 px-4 placeholder:capitalize' placeholder='password' required />
                    </div>

                
                </div>
                <div>
                        <button className='border border-primary px-8 py-2 text-primary rounded-md group relative shadow-lg '>
                            <div className='relative z-10 group-hover:text-white font-semibold'>Submit</div>
                            <div className='h-full absolute top-0 left-0 bg-primary w-0 group-hover:w-full transition-all duration-700 delay-75 ease-in-out'></div>
                        </button>
                    </div>
            </div>
         </Modal>

         <Modal LoginShow={LoginShow} setLoginShow={setLoginShow} >
            <div className='w-96 flex flex-col gap-6'>
                <div className='font-bold text-2xl'>Login</div>
                <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                        <label>usernae</label>
                        <input type='text' className='border outline-none border-gray-300 py-2 px-4 placeholder:capitalize' placeholder='email' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Email</label>
                        <input type='email' className='border outline-none border-gray-300 py-2 px-4 placeholder:capitalize' placeholder='email' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Password</label>  
                        <input type='password' className='border outline-none border-gray-300 py-2 px-4 placeholder:capitalize' placeholder='password' required />
                    </div>

                
                </div>
                <div>
                        <button className='border border-primary px-8 py-2 text-primary rounded-md group relative shadow-lg '>
                            <div className='relative z-10 group-hover:text-white font-semibold'>Submit</div>
                            <div className='h-full absolute top-0 left-0 bg-primary w-0 group-hover:w-full transition-all duration-700 delay-75 ease-in-out'></div>
                        </button>
                    </div>
            </div>
         </Modal>
      <div className='grid grid-cols-5 items-center py-4 justify-between px-5'>
        <div className='font-bold text-2xl'>Clever</div>

        <div className='flex col-span-2  gap-44 justify-between items-center'>
            <div className='flex gap-4 items-center'>
                {
                    navitem.map((val,i)=>{
                        return(
                            <Link key={i} to={val.path} className={`text-sm 
                            ${val.path===location.pathname?"text-primary":' text-gray-400'}
                            font-medium`}>
                                <div onClick={()=>{
                                    setActive(i)
                                }}>

                                {val.title}
                                </div>
                                </Link>
                        )
                    })
                }
            </div>
            <div className='flex p-1 px-2 border items-center gap-3 rounded-md'>
                <FaSearch />
                <input type='text' placeholder='search' className='outline-none py-1 px-4 ' />
            </div>
        </div>
 
        <div className='col-span-2 justify-end  flex font-bold'>
            <button onClick={()=>{
                setRegisterShow(true)
            }} className='w-fit h-fit uppercase bg-none text-primary px-10 py-3'>Register</button>
            <button onClick={()=>{
                setLoginShow(true)
            }} className='w-fit h-fit uppercase bg-primary bg-opacity-25 text-primary px-10  py-3'>Login</button>

        </div>
      </div>
    </div>
  )
}

export default SubHeader
