import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import AdicionarIngredientes from '../components/AdicionarIngredientes';
import Home from '../components/Home';
import Quantidades from '../components/Quantidades';

export default (props) => {
	return (
		<Router>
			<Switch>
				<Route exact path="/gerar-lista">
					<Quantidades alterar={props.alterar} ingredientes={props.ingredientes}/>
				</Route>
				
				<Route exact path="/cadastrar-ingrediente">
					<AdicionarIngredientes remover={props.remover} cadastrar={props.cadastrar} ingredientes={props.ingredientes}/>
				</Route>
				
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
		);
}