import React, { useEffect } from 'react'
import Carousel from '../../Utils/Carousel'
import CardProjects from '../../Utils/CardsProjects'
import TransbankCard from '../../Assets/TransbankCard.png'
import MovistarCard from '../../Assets/MovistarCard.png'
import NSCard from '../../Assets/NSCard.png'
import Conocimientos from '../../Utils/Tecnologias'
import Footer from '../../Utils/Footer'

import Fade from 'react-reveal/Fade';
import Timeline from '../../Utils/TimeLine'
import { Zoom } from 'react-reveal'


function HomeScreen() {

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        backToTop()
    }, [])


    return (
        <div className='w-full text-[#171717] font-normal h-min flex flex-col items-center overflow-hidden'>
            <div className='2xl:max-w-[1500px] md:max-w-[1200px] max-w-[370px] h-min p-5'>
                <Carousel />
            </div>
            <div className='flex flex-col mx-auto items-center justify-center text-center max-w-[1500px] p-5 w-full'>
                <Zoom up>
                    <h2 className='text-4xl md:text-5xl font-semibold py-5'>Hola soy Kevin 👋</h2>
                </Zoom>
                <p className='text-xl text-[#6f6f6f] md:w-[40%]'>Soy Kevin Leiva, un Desarrollador Full-Stack Apasionado. Con habilidades punteras en front-end y back-end. Creatividad, eficiencia y atención al detalle son mis herramientas!.💻</p>
            </div>
            <div className='flex flex-col mx-auto items-start justify-start text-center md:max-w-[1200px] 2xl:max-w-[1500px] p-5 w-full'>
                <h2 className='text-4xl font-semibold py-5 border-b-2 w-full text-center md:text-left'>Mis ultimos proyectos 💾</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-5 justify-items-center  py-10'>
                    <Fade left>
                        <CardProjects id={1} color={'bg-white'} texto={'text-[#171717]'} name={'transbank'} img={TransbankCard} title={'Web Transbank'} description={'Landing page realizada para el comercio de maquinas Transbank'} tipo={'Laboral'} />
                    </Fade>
                    <Fade right>
                        <CardProjects id={2} color={'bg-[#8CDDB1]'} texto={'text-[#ffff]'} name={'NS'} img={NSCard} title={'N&S Estudio Dental'} description={'Pagina web para clinica dental N&S, creado para dar informacion de marca y agendamiento de horas'} tipo={'Laboral'} />
                    </Fade>
                    <div className='md:col-span-6 mt-3'>
                        <Fade up>
                            <CardProjects id={3} color={'bg-[#8CB6DD]'} texto={'text-[#ffff]'} name={'Movistar'} img={MovistarCard} title={'Descuentos Movistar'} description={'Landing Page creada para la distribuicion de planes hogar y movil de empresa Movistar'} tipo={'Laboral'} />
                        </Fade>
                    </div>

                </div>
            </div>
            <div className='flex flex-col mx-auto items-start justify-start text-center md:max-w-[1200px] 2xl:max-w-[1500px] px-5 w-full'>
                <h2 className='text-4xl font-semibold py-5 border-b-2 w-full text-center md:text-left'>Conocimientos 🤯</h2>
                <Conocimientos />
            </div>
            <div className='flex flex-col mx-auto items-start justify-start text-center md:max-w-[1200px] 2xl:max-w-[1500px] px-5 py-10 w-full' >
                <h2 className='text-4xl font-semibold py-5 border-b-2 w-full text-left'>Experiencia 📖</h2>
                <div className='flex flex-col  justify-center items-center w-full py-10 gap-10'>
                    <div className='flex gap-5'>
                        <div className='bg-black text-white rounded-full'>
                            <p className='text-5xl md:text-7xl p-10'>+4</p>
                        </div>
                        <div className='flex flex-col items-start justify-center'>
                            <p className='text-3xl'>Años de<br></br> Experiencia</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full '>
                        <Timeline />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeScreen