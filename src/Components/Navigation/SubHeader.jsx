import React from 'react'

function SubHeader() {
    const navitem=[
        {
            title:"Home"
        },
        {
            title:"Page"
        }, 
        {
            title:"Courses"
        },
         {
            title:"Instructors"
        },
        {
            title:"Blog"
        }, 
        {
            title:"contact"
        },
    ]
  return (
    <div className='bg-white'>
      <div className='flex items-center py-4 justify-between px-5'>
        <div className='font-bold text-2xl'>Clever</div>

        <div className='flex  justify-between items-center'>
            <div className='flex gap-3 items-center'>
                {
                    navitem.map((val,i)=>{
                        return(

                            <div key={i} className='text-sm text-gray-400 font-medium'>{val.title}</div>
                        )
                    })
                }
            </div>
            <div>search</div>
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
