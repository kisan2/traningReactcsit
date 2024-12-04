import React, { useState } from 'react' 
import { FaSearch } from "react-icons/fa";
import {Link, useLocation} from 'react-router-dom'
function SubHeader() {
    const [Active,setActive]=useState(0)
    const location=useLocation();
    console.log(location,"Dsd")
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
      <div className='flex items-center py-4 justify-between px-5'>
        <div className='font-bold text-2xl'>Clever</div>

        <div className='flex   gap-44 justify-between items-center'>
            <div className='flex gap-3 items-center'>
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
            <div className='flex p-1 border items-center gap-3 rounded-md'>
                <FaSearch />
                <input type='text' placeholder='search' className='outline-none py-1 px-4 ' />
            </div>
        </div>

        <div className=' font-bold'>
            <button className='w-fit h-fit uppercase bg-none text-primary px-10 py-3'>Register</button>
            <button className='w-fit h-fit uppercase bg-primary bg-opacity-25 text-primary px-10  py-3'>Login</button>

        </div>
      </div>
    </div>
  )
}

export default SubHeader
