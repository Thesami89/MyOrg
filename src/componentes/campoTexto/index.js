import { useState } from 'react'
import './Texto.css'

const Texto = (props) =>{
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) =>{
        props.actualizarvalor(e.target.value)
    }
    return <div className='texto'>
        <label>{props.titulo}</label>
        <input 
        type="text" 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        />
    </div>
}

export default Texto