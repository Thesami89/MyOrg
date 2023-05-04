import { useState } from 'react'
import './Formulario.css'
import Texto from '../campoTexto'
import Lista from '../Lista'
import Boton from '../Boton/Boton'

const Formulario = (props) =>{

    const[nombre, actualizarNombre] = useState('');
    const[puesto, actualizarpuesto] = useState('');
    const[foto, actualizarfoto] = useState('');
    const[equipo, actualizarEquipo] = useState('');

    const[titulo, actualizarTitulo] = useState('');
    const[color, actualizarColor] = useState('');
    
    const {registarColaborador, crearEquipo} = props

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

    const manejarNuevoEquipo =  (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
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
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear un nuevo equipo xd.</h2>
            <Texto  
            titulo='Titulo' 
            placeholder='Ingresar Titulo' 
            required
            valor={titulo}
            actualizarvalor={actualizarTitulo}
            /> 
            <Texto 
            titulo='Color' 
            placeholder= 'Ingresa el color en Hex' 
            required
            valor={color}
            actualizarvalor={actualizarColor}
            type="color"
            />
            <Boton texto='Registrar equipo' />
        </form>
            
    </section>
}

export default Formulario