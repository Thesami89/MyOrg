import { useState } from 'react'
import './Formulario.css'
import Texto from '../campoTexto'
import Lista from '../Lista'
import Boton from '../Boton/Boton'

const Formulario = (props) =>{

    const[nombre, actualizarNombre] = useState('')
    const[puesto, actualizarpuesto] = useState('')
    const[foto, actualizarfoto] = useState('')
    const[equipo, actualizarEquipo] = useState('')
    
    const {registarColaborador} = props

    const manejarEnvio = (event) =>{
        event.preventDefault();
        console.log('este es el evento :')
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        
        registarColaborador(datosAEnviar)
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Texto  
            titulo='Nombre' 
            placeholder='Ingresa tu nombre' 
            required
            valor={nombre}
            actualizarvalor={actualizarNombre}
            /> 
            <Texto 
            titulo='Puesto' 
            placeholder= 'Ingresar puesto' 
            required
            valor={puesto}
            actualizarvalor={actualizarpuesto}
            />
            <Texto 
            titulo='Foto' 
            placeholder='Ingresar enlace de foto' 
            required
            valor={foto}
            actualizarvalor={actualizarfoto}
            />
            <Lista
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}  
            />
            <Boton texto='Crear' />
            
        </form>
    </section>
}

export default Formulario