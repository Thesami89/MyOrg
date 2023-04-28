import { useState } from 'react'
import './Miorg.css'

const Miorg = (props) => {
    //Estado - hooks
    //useSatate
    //const[nombreVariable, FuncionActualizar] = useState('valorInical')

   /* const [mostar, mostarActualizar] = useState(true)
    const manejarClick = () =>{
        console.log('se esta clickeando esto', !mostar)
        mostarActualizar(!mostar)
    }*/

    
    

    return <section className='section-org'>
        <h3 className='title'>Mi Organizacion</h3>
        <img src="./img/cerrar.png" alt="cerrar" onClick={props.cambiarMostar}></img>
    </section>
}

export default Miorg