import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function Footer() {
    return (
        <div className='w-full bg-black text-[#ededed] h-min flex  justify-between items-start'>
            <div className='md:max-w-[1200px] 2xl:max-w-[1500px] w-full flex flex-col md:flex-row mx-auto justify-between md:items-center px-4 md:px-0 py-10'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl'>Contactame</h1>
                    <a href='/contact' className='border border-white rounded-full text-center px-10 py-4 self-start mt-2'>{`Hablemos ➡️`}</a>
                </div>
                <div className='mt-5'>
                    <div className='flex items-center justify-center gap-5'>
                        <FaLinkedin className='text-3xl' />
                        <div className='flex flex-col'>
                            <h3 className='text-[#7e7e7e]'>
                                Linkedin
                            </h3>
                            <a className='text-sm' href='https://www.linkedin.com/in/kevin-leiva-98208a184/'>https://www.linkedin.com/in/kevin-leiva-98208a184/</a>
                        </div>
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <SiGmail className='text-3xl' />
                        <div className='flex flex-col'>
                            <h3 className='text-[#7e7e7e]'>
                                Gmail
                            </h3>
                            <a className='text-sm'>kevinomg9@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer