// Standard function

function hello(name) {
    return `Hello ${name}`
}

const hi = hello("Pedro")

function soma(x, y) {
    const resultado = x + y
    return resultado
}

// Anonymous function

const func = function (n) {
    return n ** 0.5
}

console.log(func(9))

// Arrow function

const test = (n) => {
    return n ** 0.5
}

console.log(test(9))