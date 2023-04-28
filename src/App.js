import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import Miorg from './componentes/Miorg';
import Colaboradores from './componentes/colaboradores';
import Target from './componentes/target';


function App() {
  const [mostrarForm, actualizarForm] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([])
  // ternario --> condicion ?  seMuestra : noSeMuestra 
  // condicion && seMuestra 

  const cambiarMostar = () => {
    actualizarForm(!mostrarForm)
  }
  
  const registarColaborador = (colaborador) =>{
    console.log('esto es un colaborador',colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const equipos = [
    {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9" 
    },
    {
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF" 
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2" 
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Inovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
    
    
  ]

  return (
    <div className="App">
      <Header />
      {/*mostrarForm === true ? <Formulario /> : <div></div>*/}
      {
        mostrarForm && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo )}
        registarColaborador = {registarColaborador}
        />
      
      }
      <Miorg cambiarMostar = {cambiarMostar} />
      {
        equipos.map((equipo) => {
          return <Colaboradores 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores = {colaboradores.filter(colaboradores => colaboradores.equipo === equipo.titulo)}
          />
         
        })
      }
    </div>
  );
}

export default App;
