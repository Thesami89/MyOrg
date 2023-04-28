import './colaboradores.css'
import Target from '../target'

const Colaboradores = (props) => {
    //Destructuracion
    const{colorPrimario, colorSecundario, titulo} = props.datos

    const {colaboradores} = props

    const colorFondo = {
        backgroundColor: colorSecundario
    }

    const colorTitulo = {borderColor:colorPrimario}

    return <section className="colaborar" style={colorFondo}>
        <h2 style={colorTitulo}>{titulo}</h2>
        <div className="colaborar__card">

            {
                colaboradores.map( (target, index) => <Target datos={target} key={index}/>)
            }
        </div>
    </section>
}

export default Colaboradores

