const numero = Number(prompt("Digite um numero"))
const numeroTitulo = document.getElementById("titulo-numero")
const texto = document.getElementById("texto")

numeroTitulo.innerHTML = numero
texto.innerHTML = `<p>Seu número é: ${numero}</p>
<p>Raiz quadrada: ${numero}</p>
<p>Dobro do numero: ${numero * 2}</p>
<p>É Nan: ${isNaN(numero)}</p>
<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>
<p>${numero} arredondado pra baixo: ${Math.floor(numero)}</p>
<p>${numero} arredondado pra cima: ${Math.floor(numero)}</p>`
