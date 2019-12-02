import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Container,} from 'react-bootstrap'
import Navegador from './components/Navegador'
import * as moment from 'moment'

function MiComponente(props){
	return (
		<div>
		<p>Hola {props.nombre} </p>
		<h1> Fecha Actual es {props.fecha} </h1>
		</div>
		)
}

class MiComponenteClase extends Component {
	render(){
		return (
			<p>Componente Clase</p>
			)
	}
} 

function App() {
	let nombre = "Alberto"
	let fecha = moment().format('MMMM Do YYYY, h:mm:ss a')
  return (
    <div className="App">
      <Container fluid="true">
        <Navegador /> 
        <MiComponente fecha={fecha} nombre={nombre} />
        <MiComponenteClase />
      </Container>
    </div>
  );
}

export default App;
