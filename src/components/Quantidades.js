import React, { Component } from 'react';
import Header from './Header';
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
					<tr><td>Nenhum ingrediente cadastrado!</td></tr>
				)
		}
		return Object.keys(ingredientes).map( ingrediente => {
			return Object.keys(ingredientes[ingrediente]).map(metrica => {
				return (
					<tr key={ingrediente+'-'+metrica} print={ ingredientes[ingrediente][metrica].value <= 0 || !ingredientes[ingrediente][metrica].value ? "noPrint" : "print" }>
						<td>{ingrediente}</td>
						<td><input onBlur={ e => this.alterarQuantidade(ingrediente, metrica, e) } className="form-control input-qtd" defaultValue={ingredientes[ingrediente][metrica].value} type="number" /> <span>{metrica}</span></td>
					</tr>
					)
			});
		})
	}

	alterarQuantidade(ingrediente, metrica, e){
		let quantidade = e.currentTarget.value;
		quantidade = parseFloat(quantidade);
		if( !isNaN(quantidade) && quantidade >= 0){
			e.currentTarget.value = quantidade;		
			this.props.alterar(ingrediente, metrica, quantidade);

		}else{
			e.currentTarget.value = 0;
			Swal.fire({
				icon: 'error',
				text: 'Valor inválido'
			})	
		}
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

				<div className="container p-sm-0 mt-2">
					<div className="row justify-content-center">
						<div className="card col-sm-12 col-lg-9 p-0 ml-1 mr-1">
							<div className="card-header bg-header text-white">
								<b>GERAR LISTA DE COMPRAS</b>
							</div>

							<div className="card-body">
								<button onClick={this.imprimir.bind(this)} className="btn bt btn-outline p-2 mt-2 mb-4 w-100">Gerar Lista</button>						
								<table className="col-12 table table-hover mt-2">
									<thead>
										<tr>
											<th scope="col">INGREDIENTE</th>
											<th scope="col" className="text-center">QUANTIDADE</th>
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
			</>
			)
	}
}

export default Quantidades;