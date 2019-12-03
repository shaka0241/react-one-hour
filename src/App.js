import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Container, Button, Row, Col, Card} from 'react-bootstrap'
import Navegador from './components/Navegador'
import * as moment from 'moment'
// import axios from 'axios'

function MiComponente(props){
	return (
		<Row>
		<Col lg="12"><Card>Hola {props.nombre}</Card></Col>
		<Col lg="12"> Fecha Actual es {props.fecha} </Col>
		</Row>
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
			<Row>
				<Col lg="12">{this.state.contador}</Col>
				<Col lg="12">
				<Button onClick={ this.aumentar }> Aumentar </Button> <span />
				<Button onClick={ this.decrementar }> Decrementar </Button>
				</Col>
			</Row>
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

class CambioFondo extends Component {

	constructor(props){
		super(props);

		this.state={
			backgroundColor: 'red'
		};
	}

	cambiaAzul = () =>{this.setState({backgroundColor: 'blue'})}
	cambiaAmarillo = () =>{this.setState({backgroundColor: 'yellow'})}

	render(){
		return (
			<div>
				<p style={{color:this.state.backgroundColor}}>hola mundo</p>
				<Button onClick={ this.cambiaAzul }> Azul </Button> <span />
				<Button onClick={ this.cambiaAmarillo }> Amarillo </Button> <span />

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
        <CambioFondo />
      </Container>
    </div>
  );
}

export default App;
