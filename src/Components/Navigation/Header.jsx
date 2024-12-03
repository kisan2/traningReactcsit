import React from 'react'
import { FaFacebookF,FaInstagram ,FaTwitter  } from "react-icons/fa";
import SubHeader from './SubHeader';
function Header() {
  return (
    <div className='bg-gray-200 '>
      <div className='flex justify-between h-10 items-center text-gray-400 text-sm uppercase  px-6'>
        {/* contact info */}
        <div className='flex font-semibold items-center  gap-8'>
            <div className='hover:text-gray-600 cursor-pointer'>Phone: <span>+9867024416</span></div>
            <div className='hover:text-gray-600 cursor-pointer'>Email : <span className='lowercase'>info@cleaver.com</span></div>
        </div>
        {/* socail  media */}
        <div className='flex items-center h-full  gap-5'>
            <div className='text-xs'>Follow us: </div>
            <div className='flex h-full items-center '>
                <div className='border-l-[1px] h-full items-center flex px-4 justify-center  border-gray-300 '>
                <FaFacebookF />

                </div>
                <div className='border-x-[1px] h-full items-center flex  border-gray-300 px-4'>
                <FaInstagram />
                </div>
                <div className='border-r-[1px] h-full items-center  flex px-4 justify-center  border-gray-300'>

                <FaTwitter  />
                </div>


            </div>
        </div>
      </div>
      <div className=''>
        <SubHeader />
      </div>
    </div>
  )
}

export default Header
