let num1 = 0.7;
let num2 = 0.1;
let num3 = num1 + num2
num3 = Number(num3)
console.log(num3) // Broken number

console.log(num3.toFixed(2)) // Fixed number
console.log(Number.isInteger(num3)) // Check if number is integer