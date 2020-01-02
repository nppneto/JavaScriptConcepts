const product = [
	{ nome: 'Notebook', preco: 2499, fragil: true },
	{ nome: 'iPad Pro', preco: 4199, fragil: true },
	{ nome: 'Copo de Vidro', preco: 12.49, fragil: true },
	{ nome: 'Copo de Plástico', preco: 18.99, fragil: false },
];

// console.log(product.filter(function(p) {
// 	return false; // não retornará nada
// }));

// TRAZER PRODUTOS CAROS E FRAGEIS
// MEU EXEMPLO
const caroEfragil = product.filter(function(p) {
	return p.preco >= 500;
}).filter(function(p) {
	return p.fragil;
});

// EXEMPLO DO PROFESSOR
const caro 	 = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

// console.log(caroEfragil);
console.log(product.filter(caro).filter(fragil));
