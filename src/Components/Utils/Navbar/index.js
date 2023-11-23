import React from 'react'
import { FaSuitcase } from "react-icons/fa6";
import { AiFillCode } from "react-icons/ai";


function Navbar() {
        return (
            <div className='w-full flex justify-between max-w-[1200px] 2xl:max-w-[1500px] mx-auto p-5 border-b-2 text-[#171717]'>
                <a href='/' className='text-2xl flex justify-center items-center '> <AiFillCode size={40}/> {`Kevin leiva`}</a>
              

            </div>
        )
    }

export default Navbar