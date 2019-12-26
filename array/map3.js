// reprodução do map
Array.prototype.map2 = function(callback) {
	const newArray = [];
	for (let i = 0; i < this.length; i++) {
		newArray.push(callback(this[i], this));
	}
	return newArray;
}

const carrinho = [
	'{"nome": "Borracha", "preco": 3.45}',
	'{"nome": "Caderno", "preco": 13.90}',
	'{"nome": "Kit de Lapis", "preco": 41.22}',
	'{"nome": "Caneta", "preco": 7.50}',
];

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => `Preço: ${produto.preco}`;

let resultado = carrinho.map2(paraObjeto).map(apenasPreco);

console.log(resultado);