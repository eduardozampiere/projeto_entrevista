import React, { Component } from 'react';
import Header from './Header';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

function vazio(obj){
	for(let i in obj){
		if(obj[i]) return false
	}
	
	return true;
}


class Quantidades extends Component{

	renderData(ingredientes){
		if(vazio(ingredientes)){
			return (
					<tr>Nenhum ingrediente cadastrado!</tr>
				)
		}
		return Object.keys(ingredientes).map( ingrediente => {
			return Object.keys(ingredientes[ingrediente]).map(metrica => {
				return (
					<tr print={ ingredientes[ingrediente][metrica].value <= 0 || !ingredientes[ingrediente][metrica].value ? "noPrint" : "print" }>
						<td>{ingrediente}</td>
						<td><input onBlur={ e => this.alterarQuantidade(ingrediente, metrica, e) } className="form-control" defaultValue={ingredientes[ingrediente][metrica].value} type="number" /></td>
						<td>{metrica}</td>
					</tr>
					)
			});
		})
	}

	alterarQuantidade(ingrediente, metrica, e){
		let quantidade = e.currentTarget.value;
		quantidade = parseFloat(quantidade);

		this.props.alterar(ingrediente, metrica, quantidade);
	}

	imprimir(){
		for(let ingrediente in this.props.ingredientes){
			let metricas = this.props.ingredientes[ingrediente];
			for(let metrica in metricas){
				if(metricas[metrica].value > 0){
					window.print();
					return false;
				}
			}
		}

		Swal.fire({
			icon: 'info',
			text: 'Sua lista de compras está vazia!'
		})
	}

	render(){

		return(
			<>
				<Header />

				<div className="container mt-2 w-75">
					<div className="row justify-content-center">
					<div className="col-lg-9 col-sm-12">
						<div className="card">
							<div className="card-header bg-header text-white">
								<b>GERAR LISTA DE COMPRAS</b>
							</div>

							<div className="card-body">
								<button onClick={this.imprimir.bind(this)} className="btn bt btn-outline p-2 mt-2 mb-4 w-100">Gerar Lista</button>						
								<table className="col-12 table table-hover mt-2">
									<thead>
										<tr>
											<th className="col-6">INGREDIENTE</th>
											<th className="col-3">QTD</th>
											<th className="col-3">MÉTRICA</th>
										</tr>
									</thead>

									<tbody>
										{this.renderData(this.props.ingredientes)}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					</div>
				</div>
			</>
			)
	}
}

export default Quantidades;