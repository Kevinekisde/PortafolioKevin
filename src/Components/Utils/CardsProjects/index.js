import React from 'react'
import { TbHandClick } from "react-icons/tb";
import { NavLink } from 'react-router-dom';


function CardProjects({ name, id, img, title, description, tipo, color, texto }) {

  const handleHover = () => {
    const id = document.getElementById(`${name}id`)
    id.classList.add('rigthanimation')
  }

  const handleLeave = () => {
    const id = document.getElementById(`${name}id`)
    id.classList.remove('rigthanimation')
  }

  return (
    <div className='relative flex '>
      <NavLink className='flex' to={`/projects/${id}`}>
        <div onMouseEnter={handleHover} onMouseLeave={handleLeave} className={`${color} ${texto}  shadow-2xl flex flex-col items-start justify-between text-left md:w-[450px] 2xl:w-[550px] h-[400px] px-5 relative z-10 ${name}`}>
          <div className='flex flex-col gap-2 mt-5'>
            <h6 className='text-base'>{tipo}</h6>
            <h4 className='text-2xl font-bold'>{title}</h4>
            <p className='text-lg'>{description}</p>
          </div>
          <img src={img} alt='Imgcard' className='w-full h-[200px] object-cover object-top rounded-t-xl transition-all shadow-lg' />
        </div>
        <div id={`${name}id`} className='bg-black h-full text-white flex flex-col justify-center items-center absolute -right-0 rounded-r-2xl px-2 transition-all'>
          <TbHandClick className='text-2xl' />
          <p>Ver mas</p>
        </div>
      </NavLink>
    </div>
  )
}

export default CardProjects