import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import Miorg from './componentes/Miorg';
import Colaboradores from './componentes/colaboradores';
import Footer from './componentes/Footer';


function App() {
  const [mostrarForm, actualizarForm] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo:"Front-End",
      foto:"https://github.com/Thesami89.png",
      nombre:"Samuel",
      puesto:"Ingeniero Front-End y Administrador empresarial",
      fav: true
    },

    {
      id: uuid(),
      equipo:"Programacion",
      foto:"https://github.com/Thesami89.png",
      nombre:"Juan",
      puesto:"Administrador",
      fav: false
    },

  ])
  const[equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9" 
    },
    {
      id: uuid(),
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF" 
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2" 
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Inovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
    
    
  ])
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

  const eliminarColaborador = (id) =>{
    console.log('estas eliminando este colaborador ', id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, id) =>{
    console.log('Estos son', color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //crear Equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  }

  const like = (id) => {
    console.log(id) 
    const colaboradoresActualizados =  colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  

  return (
    <div className="App">
      <Header />
      {/*mostrarForm === true ? <Formulario /> : <div></div>*/}
      {
        mostrarForm && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo )}
        registarColaborador = {registarColaborador}
        crearEquipo ={crearEquipo}
        />
      
      }
      <Miorg cambiarMostar = {cambiarMostar} />
      {
        equipos.map((equipo) => {
          return <Colaboradores 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores = {colaboradores.filter(colaboradores => colaboradores.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor = {actualizarColor}
          like={like}
          />
         
        })
      }
      <Footer />
    </div>
  );
}

export default App;
