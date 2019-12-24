const a = 1;
const b = 2;
const c = 3;

// const obj1 = { a: a, b: b, c: c };
const obj1 = { a, b ,c };

const nomeAttr = "Nota";
const valorAttr = 7.87;

const obj2 = {};
obj2[nomeAttr] = valorAttr
console.log(obj2);

const obj3 = {[nomeAttr]: valorAttr};
console.log(obj3);

const obj4 = {
	funcao1: function() {

	},
	funcao2() {

	}
}

console.log(obj4);