import './target.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Target = (props) => {
    const{nombre, puesto, foto, equipo, id, fav} = props.datos
    const{colorPrimario, eliminarColaborador, like} = props

    // condicion ? se muestra : no se muestra 
    return <div className='targetStyle'>
        <AiFillCloseCircle size={'30px'}  className='eliminar' onClick={() => eliminarColaborador(id)} />
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart size={'27px'} color='red' onClick={() =>like(id)} /> : <AiOutlineHeart size={'27px'} onClick={() =>like(id)}/>}
            
        </div>
    </div>
}

export default Target