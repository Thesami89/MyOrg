import { useState } from 'react'
import './Texto.css'

const Texto = (props) =>{
    const placeholderModificado = `${props.placeholder}...`

    
    const{type='text'} = props

    const manejarCambio = (e) =>{
        props.actualizarvalor(e.target.value)
    }
    return <div className={`texto texto-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        type={type}
       
        />
    </div>
}

export default Texto