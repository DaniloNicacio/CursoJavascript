/* Operadores Aritméticos
* + Adição e Concatenação
* * Multiplicação
* - Subtração
* ** Potenciação
* % Resto da divisão
*/
const num1 = '5';
const num2 = 10;
console.log(num1 + num2);

/*
Incremento = ++
Decremento = --
 */

let contador = 1;
contador++
console.log(contador);

contador = 2;
contador *= 2;
console.log(contador)

contador = 2;
contador **= 4;
console.log(contador);

// NaN - Not a Number
const num3 = 10;
const num4 = "Teste";
console.log(num3 * num4);

// Conversão de String do javascript
const num5 = "5";
console.log(num3 * num5);

//Conversão de String para Numero usando Função interna
const num6 = Number("15");
const num7 = parseFloat("2.9");
console.log(num6 * num7);