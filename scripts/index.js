/**
 * @author mauropasan
 */
'use strict'

let phrase = prompt('Escriu una frase');

function letras() {
	let chars = phrase.length;
	console.log(chars);
	return chars;
}

function palabras() {
	let words = phrase.split(' ');
	let wordsNum = words.length;
	console.log(wordsNum);
	return wordsNum;
}

function maysc() {
    let uppercasePhrase = phrase.toLocaleUpperCase();
	console.log(uppercasePhrase);
	return uppercasePhrase;
}

function titulo() {
	let phraseSplit = phrase.split(' ');
	for (let word in phraseSplit) {
		// cadenaSplit va cogiendo un word dentro de cadenaSplit, luego el primer carácter de word y lo pone en mayúscula para luego juntarlo con el resto de word
		phraseSplit[word] = phraseSplit[word].charAt(0).toLocaleUpperCase() + phraseSplit[word].substring(1);
	}
	let result = phraseSplit.join(' ');
	console.log(result);
	return result;
}

function letrasReves() {
	//Usa toda la cadena y la invierte sin usar ningún delimitador
	let invertedString = phrase.split('').reverse().join('');
	console.log(invertedString);
	return invertedString;
}

function palabrasReves() {
	// Usa toda la cadena e invierte el órden de las palabras usando el delimitador ' ' (espacio)
	let invertedWordsString = phrase.split(' ').reverse().join(' ');
	console.log(invertedWordsString);
	return invertedWordsString;
}

function palindromo() {
	let inversedString = palabrasReves(cadena);
	let invertedNoSpaces = inversedString.replace(/\s/g, '');
	let noSpaces = cadena.replace(/\s/g, '');
	let result = noSpaces.toLocaleLowerCase;
	let invertedResult = invertedNoSpaces.toLocaleLowerCase;
	return result === invertedResult;
}