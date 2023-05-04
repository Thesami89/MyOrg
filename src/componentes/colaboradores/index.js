import './colaboradores.css'
import Target from '../target'
import hexToRgba from 'hex-to-rgba';

const Colaboradores = (props) => {
    //Destructuracion
    const{colorPrimario, colorSecundario, titulo, id} = props.datos

    const {colaboradores,eliminarColaborador, actualizarColor, like} = props

    const colorFondo = {
        backgroundColor: hexToRgba(colorPrimario, 0.3)
    }

    const colorTitulo = {borderColor:colorPrimario}

    return <>
            { 
                colaboradores.length > 0 &&
                <section className="colaborar" style={colorFondo}>
                    <input 
                    type='color'
                    className='input-color'
                    value={colorPrimario}
                    onChange={(e)=>{
                        actualizarColor(e.target.value, id)
                    }}
                    />
                    <h2 style={colorTitulo}>{titulo}</h2>
                    <div className="colaborar__card">

                        {
                            colaboradores.map( (target, index) => <Target 
                            datos={target} 
                            key={index} 
                            colorPrimario={colorPrimario} 
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                            />)
                        }
                    </div>
                </section>
            }
        </>
}

export default Colaboradores

