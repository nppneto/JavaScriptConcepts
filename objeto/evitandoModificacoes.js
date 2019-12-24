// Object.preventExtensions = Permite alterar e excluir atributos existentes do objeto;
// Porém não permite a criação de novos;
// produto.nome = 'borracha' surtirá efeito;
// produto.descricao = 'borracha escolar branca' não, pois descricao não foi definida na criação do objeto;
const produto = Object.preventExtensions({
	nome: 'Qualquer',
	preco: 1.99,
	tag: 'promoção',
});

console.log('Extensivel:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal = Não permite excluir ou criar um atributo;
// Permite somente modificações em valores de atributos existentes;
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = Não permite excluir, criar ou modificar os atributos de um objeto;
const carro = { modelo: 'V30', preco: 290000 };
Object.freeze(carro);

carro.modelo = 'J45';
carro.preco = 300000;
delete carro.preco;
carro.cor = 'Vermelho';

console.log('Congelado:', Object.isFrozen(carro));

console.log(carro);