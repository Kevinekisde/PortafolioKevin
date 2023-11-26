import React, { useEffect, useRef, useState } from 'react'

function Timeline() {

    const resumenRef = useRef(null)

    const [empresa, setEmpresa] = useState('Universidad Autonoma de Chile')
    const [infoEmpresa, setInfoEmpresa] = useState(null)

    const handleEmpresa = (empresa) => {
        setEmpresa(empresa)
    }

    const setActive = () => {
        const timelineBox = document.querySelectorAll('.timeline-box')
        timelineBox.forEach(box => {
            box.classList.remove('active')
        })
    }

    useEffect(() => {
        if (empresa !== 'Universidad Autonoma de Chile') {
            setActive()
        }
    }, [empresa])



    useEffect(() => {
        const info = infoExperiencia.filter(item => item.empresa === empresa)
        setInfoEmpresa(info[0])
    }, [empresa])

    console.log(infoEmpresa)

    const infoExperiencia = [{
        empresa: 'Universidad Autonoma de Chile',
        cargo: 'Ingenieria Civil en Informatica',
        descripcion: 'Estudie 2 años en la universidad, pero por motivos personales tuve que dejar la carrera, pero no deje de estudiar, ya que me encanta la programacion y el desarrollo web, por lo que segui estudiando por mi cuenta y en institutos'
    },
    {
        empresa: 'Henry',
        cargo: 'Fullstack Developer',
        descripcion: 'Estudie en bootcamp soy henry donde pude reforzar mis conocimientos y aprender nuevas tecnologias, como React, Redux, Node, Express, Sequelize, PostgreSQL, MongoDB, Firebase, Git, HTML, CSS, JavaScript, TypeScript, entre otras'
    },
    {
        empresa: 'Bresh',
        cargo: 'Fullstack Developer',
        descripcion: 'Trabaje en Fiesta bresh donde desarrolle una pagina web para la venta de entradas, donde se podia comprar, ver el historial de compras, ver los eventos, entre otras cosas',
        tecnologias: 'React, Redux, Node, Express, Sequelize, PostgreSQL, MongoDB, Firebase, Git, HTML, CSS, JavaScript, TypeScript'
    },
    {
        empresa: 'Konabil',
        cargo: 'Fullstack Developer',
        descripcion: 'Trabaje en Konabil donde desarrolle nuevas funcionalidades para un software de contabilidad y gestion de empresas, como tambien se realizo una limpieza de codigo y se refactorizaron funciones y componentes',
        tecnologias: 'React, Node, Express, SQL, Azure, HTML, CSS, JavaScript'
    },
    {
        empresa: 'Simple Moviles',
        cargo: 'Mobile Developer',
        descripcion: 'Trabaje en Simple Moviles donde desarrolle una aplicacion movil para gestion del usuario del servicio movil, donde se podia recargar, ver el historial de recargas, actualizar los planes, entre otras cosas',
        tecnologias: 'React Native, Node, Express, PostgreSQL, AWS, Git, Angular HTML, CSS, JavaScript'
    },
    {
        empresa: 'Simple Soluciones',
        cargo: 'Fullstack Developer',
        descripcion: 'Actualmente trabajo para simple soluciones una empresa de desarrollo de software, donde se prestan soluciones tecnologicas a empresas, donde se desarrollan aplicaciones web y moviles, como tambien se realizan integraciones con sistemas externos',
        tecnologias: 'React, React Native, Angular, Node, Express, postgreSQL, Azure, AWS, Git, Angular HTML, CSS, JavaScript'
    },


    ]


    return (
        <div className='w-full flex flex-col justify-center items-center h-min '>
            <ul className='timeline timeline-vertical md:timeline-horizontal text-[#171717] w-full flex justify-center'>
                <li>
                    <div class="timeline-end md:timeline-start">2019</div>
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                    </div>
                    <button onClick={() => setEmpresa('Universidad Autonoma de Chile')} class="timeline-start md:timeline-end timeline-box focus:bg-[#171717] focus:text-white bg-transparent text-sm cursor-pointer active">Universidad Autonoma de Chile</button>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-start">2021</div>
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                    </div>
                    <button onClick={() => setEmpresa('Henry')} class="timeline-end timeline-box focus:bg-[#171717] focus:text-white bg-transparent text-sm cursor-pointer">Henry<br></br> Fullstack Developer</button>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-end md:timeline-start">2022</div>
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                    </div>
                    <button onClick={() => setEmpresa('Bresh')} class="timeline-start md:timeline-end focus:bg-[#171717] focus:text-white  timeline-box bg-transparent text-sm cursor-pointer">Bresh <br></br> Fullstack Developer</button>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-start">2022</div>
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                    </div>
                    <button onClick={() => setEmpresa('Konabil')} class="timeline-end timeline-box focus:bg-[#171717] focus:text-white bg-transparent text-sm cursor-pointer">Konabil <br></br> Fullstack Developer</button>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-end md:timeline-start">2022</div>
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                    </div>
                    <button onClick={() => setEmpresa('Simple Moviles')} class="timeline-start md:timeline-end timeline-box focus:bg-[#171717] focus:text-white bg-transparent text-sm cursor-pointer">Simple Moviles <br></br> Mobile Developer</button>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-start">2023</div>
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                    </div>
                    <button onClick={() => setEmpresa('Simple Soluciones')} class="timeline-end timeline-box focus:bg-[#171717] focus:text-white bg-transparent text-sm cursor-pointer">Simple Soluciones <br></br> Fullstack Developer</button>
                    <hr />

                </li>

            </ul>
            <div ref={resumenRef} className='mt-10 self-start text-left transition-all'>
                <h3 className='text-4xl '>Resumen</h3>
                <div className=' flex flex-col md:grid md:grid-cols-2 md:justify-center md:items-center gap-5 py-5'>
                    <h4 className='text-xl md:text-2xl text-[#6f6f6f] whitespace-nowrap'>{infoEmpresa?.empresa}<br />{infoEmpresa?.cargo}</h4>
                    <p className='text-justify text-xl text-[#6f6f6f] transition-all'>{infoEmpresa?.descripcion}</p>
                    <div className='col-span-6'></div>
                    {
                        infoEmpresa?.tecnologias && (
                            <div className='flex flex-col justify-center items-center gap-5 col-span-6'>
                                <h4 className='text-2xl '>Tecnologias</h4>
                                <p className='text-xl text-[#6f6f6f]'>{infoEmpresa?.tecnologias}</p>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Timeline