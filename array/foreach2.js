// Minha solução de reprodução do forEach
function foreach(array) {
	let count = 0;

	while(count < array.length) {
		console.log(`${count}) ${array[count]}`);
		count++;
	}
}

const meuArray = ['Nelson', 'Natasha', 'Bryan', 'Regina', 'André'];

foreach(meuArray);

// Solução do professor
Array.prototype.forEach2 = function(callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this);
	}
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach2(function(nome, indice) {
	console.log(`${indice + 1}) ${nome}`);
});