import React from 'react';
import {Link} from 'react-router-dom';
const AdicionarIngredientes = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<Link to="/" className="navbar-brand">Restaurante</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link to="/cadastrar-ingrediente/" className="nav-link">Cadastrar</Link>
					</li>
		
					<li className="nav-item">
						<Link to="/gerar-lista/" className="nav-link">Gerar Lista</Link>
					</li>		
				</ul>
			</div>
		</nav>

		);
}

export default AdicionarIngredientes;
