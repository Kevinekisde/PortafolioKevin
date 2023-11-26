import React from 'react'
import { FaSuitcase } from "react-icons/fa6";
import { AiFillCode } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import CV from '../../Assets/Cv.pdf'
import { useState } from 'react';


function Navbar() {

    const [show, setShow] = useState(false)
    
    const handleShow = () => {
        setShow(!show)
        setTimeout(() => {
            setShow(false)
        }, 6000)
    }


    return (
        <div className='w-full flex justify-between items-center max-w-[1200px] 2xl:max-w-[1500px] mx-auto p-5 border-b-2 text-[#171717]'>
            <div className={show == false ? 'hidden' : 'toast'}>
                <div className="alert alert-success">
                    <span className='text-white'>CV Descargado Correctamente</span>
                </div>
            </div>
            <a href='/' className='text-xl md:text-2xl flex justify-center items-center '> <AiFillCode size={40} /> {`Kevin leiva`}</a>
            <a onClick={handleShow} href={CV} download="Cv_Kevin_leiva" className='btn btn bg-[#171717] text-white font-normal'>
                <FaFileDownload />
                Descargar CV
            </a>
        </div>
    )
}

export default Navbar