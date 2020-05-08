import React, {Component} from 'react';
import Routes from './routes/routes';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {};
		this.state.ingredientes = {
			'Macarrao': {
				'g':{
					value: 1
				}
			}
		};
	}

	cadastrar = async (ingrediente, metrica) => {
		
		let ingredientes = this.state.ingredientes;
		if(!ingredientes[ingrediente]) ingredientes[ingrediente] = {}

		ingredientes[ingrediente][metrica] = {value: 0}
		await this.setState({ingredientes});
	}

	remover = async (ingrediente, metrica) => {
		let ingredientes = this.state.ingredientes;
		if(ingredientes[ingrediente]){
			if(ingredientes[ingrediente][metrica]){
				delete ingredientes[ingrediente][metrica];
			}

			if(Object.keys( ingredientes[ingrediente] ).length === 0){
				delete ingredientes[ingrediente];
			}
		}
		// console.log(ingredientes);
		await this.setState({ingredientes});
	}

	alterar = async (ingrediente, metrica, quantidade) => {
		let ingredientes = this.state.ingredientes;
		if(ingredientes[ingrediente][metrica]){
			ingredientes[ingrediente][metrica].value = parseFloat(quantidade);
		}
		// console.log(ingredientes);
		await this.setState({ingredientes});
	}

	render(){
		return (
		<Routes cadastrar={this.cadastrar.bind(this)} ingredientes={this.state.ingredientes} alterar={this.alterar.bind(this)} remover={this.remover.bind(this)}/>
		);
	}
}

export default App;
