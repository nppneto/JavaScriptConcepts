const pai = { nome: "bryan", corCabelo: "preto" };

const filha1 = Object.create(pai);
filha1.nome = "Laura";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
	nome: { value: "Bia", writable: false, enumerable: true }
});

console.log(filha2.nome);
filha2.nome = "Carla";
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

// se retornar true, traz a propriedade do objeto
// se retornar false, é porque recebe pela cadeia de prototipos (herança)
for (let key in filha2) {
	filha2.hasOwnProperty(key) ?
	console.log(key) : console.log(`Por herança: ${key}`);
}