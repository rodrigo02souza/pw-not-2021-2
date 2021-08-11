// função tradicional com 1 parametro e 1 linha de código no dorpo, com return
function quadrado(x) {
    return x * x
}

// arrow function equivalente
// 1) a função deve ser atribuída a uma variável (ou, melhor, a uma constante)
// 2) Desaparece a palavra-chave 'function'
// 3) Desaparecem os parenteses em torno do parâmetro
// 4) Após o parâmetro, aparece o símbolo => (flecha, arrow)
// 5) Desaparecem as chaves em torno do corpo da função 
// 6) Desaparece a palavra-chave 'return'

const quadrado2 = x => x * x

console.log(quadrado(9))
console.log(quadrado2(9))

// Função tradicional com 2 argumentos, 1 linha de corpo com return
function potencia(base, expoente){
    return base ** expoente
}

const potencia2 = (base, expoente) => base ** expoente

console.log(potencia(6, 2))
console.log(potencia2(6, 2))

console.log('------------------------------')

function horaAtual(){
    return new Date()
}

const horaAtual2 = () => new Date()
console.log(horaAtual())
console.log(horaAtual2())

function fatorial(n) {
    let res = 1
    for(let i = n; i < 1; i--) res *= i
    return res
}

const fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

const fatorial3 = n => (n <= 1 ? 1 : n * fatorial3(n -1))

