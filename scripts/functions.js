/**
 * @author mauropasan
 */
'use strict'

/**
 * Devuelve el total de carácteres que tiene un String
 * @param {cadena} cadena String
 * @returns total de carácteres
 */
function letras(cadena) {
	return cadena.length;
}

/**
 * Devuelve el total de palabras que contiene un String
 * @param {cadena} cadena String
 * @returns total de palabras
 */
function palabras(cadena) {
	let words = cadena.split(' ');
	return words.length;
}

/**
 * Devuelve la cadena pasada por parámetro en mayúscula (UpperCase)
 * @param {cadena} cadena String
 * @returns cadena en mayúscula
 */
function maysc(cadena) {
	return cadena.toLocaleUpperCase();
}

/**
 * Obtiene el String pasado por parámetro con cada primera letra de cada palabra en mayúscula
 * @param {cadena} cadena String
 * @returns cadena con cada primera letra de cada palabra en mayúscula
 */
function titulo(cadena) {
	return cadena
	.split(' ')
	.map(word => word.charAt(0).toLocaleUpperCase() + word.substr(1))
	.join(' ').trim();
}

/**
 * Obtiene la cadena invertida
 * @param {cadena} cadena String
 * @returns cadena invertida
 */
function letrasReves(cadena) {
	//Usa toda la cadena y la invierte sin usar ningún delimitador
	return cadena.split('').reverse().join('');
}

/**
 * Obtiene el String con las palabras invertidas
 * @param {cadena} cadena String
 * @returns cadena con las palabras invertidas
 */
function palabrasReves(cadena) {
	// Usa toda la cadena e invierte el órden de las palabras usando el delimitador ' ' (espacio)
	return cadena.split(' ').reverse().join(' ');
}

/**
 * Compara y retorna true o false si la palabra es palíndromo o no
 * @param {cadena} cadena 
 * @returns true o false si el String es palíndromo
 */
function palindromo(cadena) {
	cadena = cadena.toLowerCase().split(' ').join('');
	return cadena === letrasReves(cadena);
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