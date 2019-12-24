// Classe
class Pessoa {
	constructor(nome) {
		this.nome = nome;
	}

	falar() {
		console.log(`Meu nome é ${this.nome}!`);
	}
}

const p1 = new Pessoa("Nelson");
p1.falar();

// Factory (Função)
const criarPessoa = nome => {
	return {
		falar: () => console.log(`Meu nome é ${nome}!`)
	}
}

const p2 = criarPessoa("Nelson");
p2.falar();