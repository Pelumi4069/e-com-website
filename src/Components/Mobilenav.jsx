import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import CartCount from './CartCount';

const Mobilenav = ({setShowCart}) => {
  return (
    <div className='sticky top-0 bg-white z-10 '>
       <div className="container  lg:hidden p-8">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
                <IoIosMenu size={30} />
                <IoMdSearch size={24} />
            </div>
            <h1 className='text-4xl font-medium'>Logo</h1>
            <div className="flex gap-4 text-[30px]">
            <FaRegUser />
             <div className="relative cursor-pointer"
             onClick={() => setShowCase(true)}
             >
               <IoCartOutline />
                <CartCount size="w-[20px] h-[20px]" />
             </div>
              </div>
            </div>
        </div>
        </div> 
  )
}

export default Mobilenav