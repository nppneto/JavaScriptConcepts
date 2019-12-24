// coleção dinamica de pares chave/valor
const produto = new Object;
produto.nome = "Cadeira";
produto["marca do produto"] = "Genérica";
produto.preco = 220;

console.log(produto);

const carro = {
	modelo: "A4",
	valor: 89000,
	proprietario: {
		nome: "Nelson",
		idade: 56,
		endereco: {
			logradouro: "Rua ABC",
			numero: 123,
		}
	},
	condutores: [{
		nome: "Junior",
		idade: 19,
	}, {
		nome: "Natasha",
		idade: 28,
	}],
	calcularValorSeguro: function() {
		//...
	}
}

carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["logradouro"] = "Av. Gigante";

console.log(carro);
delete carro.condutores;
console.log(carro);
delete carro.calcularValorSeguro;
console.log(carro);