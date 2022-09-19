/**
 * @author mauropasan
 */
'use strict'

/**
 * 
 * @param {cadena} cadena String
 * @returns total de carácteres
 */
function letras(cadena) {
	return cadena.length;
}

/**
 * 
 * @param {cadena} cadena String
 * @returns total de palabras
 */
function palabras(cadena) {
	let words = cadena.split(' ');
	return words.length;
}

/**
 * 
 * @param {cadena} cadena String
 * @returns cadena en mayúscula
 */
function maysc(cadena) {
	return cadena.toLocaleUpperCase();
}

/**
 * 
 * @param {cadena} cadena String
 * @returns cadena con cada primera letra de cada palabra en mayúscula
 */
function titulo(cadena) {
	let cadenaSplit = cadena.split(' ');
	for (let word in cadenaSplit) {
		// cadenaSplit va cogiendo un word dentro de cadenaSplit, luego el primer carácter de word y lo pone en mayúscula para luego juntarlo con el resto de word
		cadenaSplit[word] = cadenaSplit[word].charAt(0).toLocaleUpperCase() + cadenaSplit[word].substring(1);
	}
	return cadenaSplit.join(' ');
}

/**
 * 
 * @param {cadena} cadena String
 * @returns cadena invertida
 */
function letrasReves(cadena) {
	//Usa toda la cadena y la invierte sin usar ningún delimitador
	return cadena.split('').reverse().join('');
}

/**
 * 
 * @param {cadena} cadena String
 * @returns cadena con las palabras invertidas
 */
function palabrasReves(cadena) {
	// Usa toda la cadena e invierte el órden de las palabras usando el delimitador ' ' (espacio)
	return cadena.split(' ').reverse().join(' ');
}

function palindromo(cadena) {
	let inversedString = palabrasReves(cadena);
	let invertedNoSpaces = inversedString.replace(/\s/g, '');
	let noSpaces = cadena.replace(/\s/g, '');
	let result = noSpaces.toLocaleLowerCase;
	let invertedResult = invertedNoSpaces.toLocaleLowerCase;
	if(result === invertedResult) {
		console.log('Sí es un palíndromo');
	} else {
		console.log('No es un palíndromo');
	}
	return result === invertedResult;
}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}