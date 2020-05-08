import React, {Component} from 'react';
import Header from './Header';
import { FaTrashAlt } from 'react-icons/fa';

import Swal from 'sweetalert2';

class AdicionarIngredientes extends Component{

	constructor(props){
		super(props);
		this.iRef = React.createRef()
		this.mRef = React.createRef()
		this.bodyRef = React.createRef()

		this.event = {
			'Enter': () => {this.cadastrar()},
		}
	}

	renderData(ingredientes, qtd=false){
		if(ingredientes.length <= 0){
			return (
					<tr></tr>
				)
		}
		return Object.keys(ingredientes).map( ingrediente => {
			return Object.keys(ingredientes[ingrediente]).map(metrica => {
				return (
					<tr key={ingrediente+'-'+metrica}>
						<td property={ingrediente} >{ingrediente}</td>
						<td property={metrica} >{metrica} <span className="float-right"><FaTrashAlt onClick={ this.remover.bind(this, ingrediente, metrica)}/></span></td>
					</tr>
					)
			});
		})
	}

	cadastrar(){
		if(this.iRef.current === null) return ()=>{};
		if(this.mRef.current === null) return ()=>{};

		if(!this.iRef.current.value){
			Swal.fire({
				text: 'Voce precisa dizer o nome do ingrediente!',
				icon: 'info'
			})
			return false;
		}

		if(!this.mRef.current.value){
			Swal.fire({
				text: 'Voce precisa dizer a métrica do ingrediente!',
				icon: 'info'
			})
			return false;
		}

		this.props.cadastrar(this.iRef.current.value, this.mRef.current.value);

		this.iRef.current.value = '';
		this.mRef.current.value = '';
		this.iRef.current.focus();
	}

	remover(i, m){
		this.props.remover(i, m);
	}

	handle(e){
		if(this.event[e.key]) this.event[e.key]()
	}

	render(){
		return (
		<>
			<Header />
			<div className="container p-sm-0 mt-2">
			<div className="row justify-content-center">
				<div className="card col-sm-12 col-lg-9 p-0 ml-1 mr-1">
					<div className="card-header bg-header text-white">
						<b>ADICIONAR INGREDIENTES</b>
					</div>

					<div className="card-body">
						<div className="formGroup row ">
							<div className="col-6">
								<input type="text" onKeyUp={ this.handle.bind(this) } ref={ this.iRef } className="form-control" placeholder="Ingrediente"/>
							</div>
							
							<div className="col-6">
								<select onKeyUp={ this.handle.bind(this) } ref={ this.mRef } className="form-control ml-0" placeholder="Metrica">
									<option value="">Selecione uma métrica</option>
									<optgroup label="Métricas de peso">
										<option value="Kg">Kg</option>
										<option value="g">g</option>
									</optgroup>

									<optgroup label="Métricas de volume">
										<option value="L">L</option>
										<option value="ml">ml</option>
									</optgroup>
									<optgroup label="Outras métricas">
										<option value="Unidade">Unidade</option>
									</optgroup>
								</select>
							</div>
						</div>
						<div className="row pl-3 pr-3">
							<button onClick={this.cadastrar.bind(this)} className="btn bt btn-outline p-2 mt-2 mb-4 w-100">Cadastrar</button>
						</div>
						<table className="col-12 table table-hover mt-2">
							<thead>
								<tr>
									<th scope="col">INGREDIENTE</th>
									<th scope="col">MÉTRICA</th>
								</tr>
							</thead>

							<tbody ref={this.bodyRef}>
								{this.renderData(this.props.ingredientes)}
							</tbody>
						</table>
					</div>
				</div>
				</div>
			</div>
		</>
		);
	}
}

export default AdicionarIngredientes;
