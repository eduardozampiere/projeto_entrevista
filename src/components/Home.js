import React from 'react';
import Header from './Header';


export default () => {
	return(
			<>
				<Header />
				<div className="container mt-2">
					<div className="row justify-content-center">
						<h1>Bem vindo!</h1>
					</div>
					<div className="row justify-content-center mt-4">
						<h5>Já sabe utilizar nosso sistema?</h5>
					</div>
					<div className="pl-3 pr-3 row justify-content-center mt-0">
						<p>Caso ainda não esteja familiarizado com nossa a interface, aqui vai um breve tutorial.</p>
					</div>

					<div className="pl-3 row justify-content-center mt-4">
						<h3>Como cadastrar os produtos?</h3>
					</div>

					<div className="pl-3 pr-3 row justify-content-center mt-2">
						<p>Primeiro vamos acessar a página de cadastro usando o menu. Clique em "Cadastrar".</p>
					</div>
					<div className="pl-3 row justify-content-center mt-0">
						<small>Uma dica: abra em outra aba para continuar acompanhando o tutorial</small>
					</div>
					<div className="pl-3 pr-3 row justify-content-center mt-4">
						<p>Agora você vai ver dois campos para serem preenchidos. São eles, respectivamente, o nome do ingrediente e a métrica.</p>
					</div>
					<div className="row justify-content-center">
						<div className="card-header p-4 w-100">
							<div className="row justify-content-center mt-0">
								<small><b>Mas o que é uma métrica?</b></small>
							</div>

							<div className="row justify-content-center mt-0">
								<small>Uma métrica é só uma maneira formal de representar a unidade de medida, você já usa isso todo dia. Por exemplo, Kg e Km são métricas. Agora que você já aprendeu o que é uma métrica, vamos continuar.</small>
							</div>
						</div>
					</div>
					<div className="pl-3 pr-3 row justify-content-center mt-4">
						<p>Vamos começar inserindo um ingrediente, por exemplo, macarrão. Logo depois escolheremos a métrica usada, vamos escolher Kg. </p>
					</div>

					<div className="row justify-content-center">
						<div className="card-header p-4 w-100">
							<div className="row justify-content-center mt-0">
								<small><b>Mas eu compro o pacote de macarrão em gramas!</b></small>
							</div>
							<div className="row justify-content-center mt-0">
								<small>Nosso sistema aceita várias métricas para um mesmo ingrediente, então podemos cadastrar o macarrão tanto em kg como em g.</small>
							</div>
						</div>
					</div>

					<div className="pl-3 pr-3 row justify-content-center mt-4">
						<p>Agora que você já digitou o ingrediente e escolheu sua métrica, clique em cadastrar. Pronto, seu produto já foi cadastrado!</p>
					</div>
					<div className="row justify-content-center">
						<div className="card-header p-4 w-100">
							<div className="row justify-content-center mt-0">
								<small><b>Digitei macarrão errado, e agora?!</b></small>
							</div>

							<div className="row justify-content-center mt-0">
								<small>Calma! Se acontecer de cadastrar algum produto errado, clique no ícone da lixeira ao lado de cada linha e pronto, o produto nunca existiu!</small>
							</div>
						</div>
					</div>

					<div className="pl-3 row justify-content-center mt-4">
						<h3>Como imprimir a lista de compras</h3>
					</div>
					<div className="pl-3 pr- row justify-content-center mt-2">
						<p>No menu superior, clique em "Gerar Lista". Agora estamos na página de criação da lista de compras. Esta é a parte mais simples, basta digitar as quantidades que devem ser compradas e clicar em "Gerar Lista".</p>
					</div>

					<div className="row justify-content-center mb-4">
						<div className="card-header w-100 p-4">
							<div className="row justify-content-center mt-0">
								<small><b>Mas e se ficar algum item com quantidade zero, ele também será impresso?</b></small>
							</div>

							<div className="row justify-content-center mt-0">
								<small>Fique tranquilo, nosso sistema só imprime os itens que você precisa comprar!</small>
							</div>
						</div>
					</div>
				</div>
			</>
			)
};