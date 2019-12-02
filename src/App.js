import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Container, Button} from 'react-bootstrap'
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

class Contador extends Component {

	constructor(props){
		super(props);

		this.state={
			contador:0
		};
	}

	aumentar = () =>{this.setState({contador:this.state.contador + 1})}
	decrementar = () =>{this.setState({contador:this.state.contador - 1})}

	render(){
		return (
			<div>
				<p>{this.state.contador}</p>
				<Button onClick={ this.aumentar }> Aumentar </Button> <span />
				<Button onClick={ this.decrementar }> Decrementar </Button>
			</div>
			)
	}
}

class Hora extends Component {

	constructor(props){
		super(props);

		this.state={
			hora: moment().format('LTS')
		};
	}

	verHora = () =>{this.setState({hora:moment().format('LTS')})}

	render(){
		return (
			<div>
				<p>{this.state.hora}</p>
				<Button onClick={ this.verHora }> Actualizar Hora </Button> <span />
			</div>
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
        <Contador />
        <Hora />
      </Container>
    </div>
  );
}

export default App;
