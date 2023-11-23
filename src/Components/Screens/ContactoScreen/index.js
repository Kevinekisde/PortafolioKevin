import React, { useState } from 'react'
import Terminal, { ColorMode, TerminalOutput, TerminalInput } from 'react-terminal-ui';
import emailjs from '@emailjs/browser'

function ContactoScreen() {
    const [step, setStep] = useState(1);
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput>Escribe tu nombre</TerminalOutput>
    ]);

    const [data, setData] = useState({
        from_name: '',
        email: '',
        mensaje: ''
    })

    const handleInputChange = (value) => {
        emailjs.init("TSD1Vi_e0odI2vvob");
        if (step == 1) {
            if (value.length < 3){
                setTerminalLineData([
                    ...terminalLineData,
                    <TerminalOutput>El nombre debe tener mas de 3 caracteres</TerminalOutput>
                ])
                return
            }
            setTerminalLineData([
                ...terminalLineData,
                <TerminalInput>{value}</TerminalInput>,
                <TerminalOutput>Escribe tu email</TerminalOutput>
            ])
            setData({
                ...data,
                from_name: value
            })
            setStep(2)
        }
        if (step == 2) {
            if (!value.includes('@')) {
                setTerminalLineData([
                    ...terminalLineData,
                    <TerminalOutput>Email invalido</TerminalOutput>
                ])
                return
            }
            setTerminalLineData([
                ...terminalLineData,
                <TerminalInput>{value}</TerminalInput>,
                <TerminalOutput>Escribe tu mensaje</TerminalOutput>
            ])
            setData({
                ...data,
                email: value
            })
            setStep(3)
        }
        if (step == 3) {
            if (value.length < 3) {
                setTerminalLineData([
                    ...terminalLineData,
                    <TerminalOutput>El mensaje debe tener mas de 3 caracteres</TerminalOutput>
                ])
                return
            }
            setData({
                ...data,
                mensaje: value
            })
            setTerminalLineData([
                ...terminalLineData,
                <TerminalInput>{value}</TerminalInput>,
                <TerminalOutput>Gracias por tu mensaje, te contactare lo antes posible</TerminalOutput>
            ])
            setStep(4)
            emailjs.send('service_lzz63zh', 'template_w6bs0ik', { ...data, mensaje: value })
        }
    }








    return (
        <div className="container h-min w-full mx-auto py-10 p-4 md:p-0 2xl:max-w-[1200px] md:max-w-[1000px]">
            {
                step < 4 &&
                <Terminal name='Kevin contacto' colorMode={ColorMode.Dark} onInput={terminalInput => handleInputChange(terminalInput)}>
                    {terminalLineData}
                </Terminal>
            }
            {
                step == 4 &&
                <Terminal name='Kevin contacto' colorMode={ColorMode.Dark}>
                    <TerminalOutput>Nombre: {data.from_name}</TerminalOutput>
                    <TerminalOutput>Email: {data.email}</TerminalOutput>
                    <TerminalOutput>Mensaje: {data.mensaje}</TerminalOutput>
                    <TerminalOutput>Gracias por tu mensaje, te contactare lo antes posible ✌️</TerminalOutput>
                </Terminal>
            }


        </div>
    )
}

export default ContactoScreen