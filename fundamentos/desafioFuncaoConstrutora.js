// Como eu tentei fazer
function criarPessoa(nome) {
	console.log(`Meu nome é ${nome}!`);
}

pessoa1 = criarPessoa("Nelson");

// Jeito certo de fazer em função construtora

function Pessoa(nome) {
	this.nome = nome;

	this.falar = function() {
		console.log(`Meu nome é ${nome}!`);
	}
}

const p1 = new Pessoa("Nelson");
p1.falar();