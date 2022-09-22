/**
 * @author mauropasan
 */
'use strict';

let phrase = prompt('Escriu una frase');

if(!phrase.trim()) {
	alert("No s'ha introduït ningún text");
} else {
	console.log('Frase: ' + phrase)

	console.log(letras(phrase) + ' lletres i ' + palabras(phrase) + ' palabras');
	console.log(maysc(phrase));
	console.log(titulo(phrase));
	console.log(letrasReves(phrase));
	console.log(palabrasReves(phrase));
	console.log(palindromo(phrase));
}