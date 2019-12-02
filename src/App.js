import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Container,} from 'react-bootstrap'
import Navegador from './components/Navegador'

function MiComponente(){
	return (
		<p>Hola Mundo </p>
		)
}

class MiComponenteClase extends Component {
	render(){
		return (
			<p>Hola soy una clase componente</p>
			)
	}
} 

function App() {
  return (
    <div className="App">
      <Container fluid="true">
        <Navegador /> 
        <MiComponente />
        <MiComponenteClase />
      </Container>
    </div>
  );
}

export default App;
