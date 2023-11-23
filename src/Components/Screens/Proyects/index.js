import React, { useEffect, useState } from 'react'
import Proyects from '../../Proyects.json'
import { useParams } from 'react-router-dom'
import { TbWorldSearch } from 'react-icons/tb'
import Zoom from 'react-reveal/Zoom'


function ProjectScreen() {
    const { id } = useParams()
    const [proyect, setProyect] = useState([])
    const [img, setImg] = useState(null)


    useEffect(() => {
        const proyect = Proyects.find((proyect) => proyect.id === id)
        setProyect(proyect)
    }, [id])

    useEffect(() => {
        const fetchImage = async () => {
            try {
                if (!proyect) return
                const urlImage = proyect.img
                const response = await import(`../../Assets/${urlImage}.png`)
                console.log(response.default)
                setImg(response.default)

            } catch (error) {
                console.log(error)
            }
        }
        fetchImage()
    }, [proyect])


    return (
        <div className='w-full h-min text-[#171717] flex flex-col justify-center items-center mx-auto md:max-w-[1200px] 2xl:max-w-[1500px] p-4'>
            <Zoom up className='w-full 2xl:h-[320px]  overflow-hidden md:rounded-b-3xl'>
                <img src={img} className='md:rounded-b-3xl' />
            </Zoom>
            <div className='w-full flex gap-2 flex-col items-start justify-start mt-5 md:mt-2'>
                <small className='text-[#6f6f6f] text-lg'>{`${proyect.empresa} - ${proyect.fecha}`}</small>
                <h1 className='text-5xl'>{proyect.name}</h1>
                <div className=' text-lg text-[#6f6f6f]'>
                    <a href={proyect.url} className='flex items-center text-lg gap-2'>
                        <TbWorldSearch size={30} />
                        {proyect.url}
                    </a>
                </div>
                <h2 className='text-3xl mt-10 font-bold'>Descripcion</h2>
                <p className='text-base md:text-lg md:w-[70%] text-justify font-thin'>{proyect.Description}</p>
                <h2 className='text-3xl mt-10 font-bold'>Stack Tecnologico</h2>
                <p className='text-base md:text-lg mb-10 font-thin'>{proyect.tecnologias}</p>

            </div>

        </div>
    )
}

export default ProjectScreen