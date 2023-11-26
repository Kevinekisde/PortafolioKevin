import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';



function CardsProjects({ id, img, title, description }) {
    return (
        <NavLink to={`/projects/${id}`} className={`w-full ${img} h-[300px] md:h-[300px] 2xl:h-[500px] bg-cover md:bg-center text-white flex justify-end flex-col`}>
            <div className='flex justify-between items-center w-full bg-[#171717] bg-opacity-50 md:p-10 p-5 space-grotesk transition-all hover:bg-opacity-90'>
                <div>
                    <h3 className='md:text-lg text-base'>{title}</h3>
                    <h2 className='md:text-4xl text-3xl'>{description}</h2>
                </div>
                <FaArrowRight className='md:text-4xl text-3xl text-white' />
            </div>
        </NavLink>
    )
}

export default CardsProjects