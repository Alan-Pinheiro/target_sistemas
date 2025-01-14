// Desafio 1

console.log("----- DESAFIO 1 -----")

const indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma);

console.log("----- DESAFIO 2 -----")

// Desafio 2

const verificaFibonacci = (numero) => {
  if (numero < 0) return "Esse número não pertence à sequência de Fibo.";

  let [a, b] = [0, 1];

  while (a < numero) {
    [a, b] = [b, a + b];
  }

  if (a === numero) {
    return `O número ${numero} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
};

// Defini alguns números a serem verificados já no código
// Pesando em uma interação com o usuário eu poderia colocar que esse console.log = prompt (que apareceria na tela do usuário)
console.log(verificaFibonacci(1));
console.log(verificaFibonacci(3));
console.log(verificaFibonacci(8));
console.log(verificaFibonacci(9));
console.log(verificaFibonacci(30));

// Desafio 3

console.log("----- DESAFIO 3 -----")
console.log("Não consegui resolver")

// Desafio 4

console.log("----- DESAFIO 4 -----")

const faturamentoSp = 67836.43;
const faturamentoRj = 36678.66;
const faturamentoMg = 29229.88;
const faturamentoEs = 27165.48;
const faturamentoOutros = 19849.53;

let faturamentoTotal = faturamentoSp + faturamentoRj + faturamentoMg + faturamentoEs + faturamentoOutros;

const percentualSp = (faturamentoSp / faturamentoTotal) * 100;
const percentualRj = (faturamentoRj / faturamentoTotal) * 100;
const percentualMg = (faturamentoMg / faturamentoTotal) * 100;
const percentualEs = (faturamentoEs / faturamentoTotal) * 100;
const percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;

console.log(`Percentual de representação de cada estado:`);
console.log(`SP: ${percentualSp.toFixed(2)}%`);
console.log(`RJ: ${percentualRj.toFixed(2)}%`);
console.log(`MG: ${percentualMg.toFixed(2)}%`);
console.log(`ES: ${percentualEs.toFixed(2)}%`);
console.log(`Outros: ${percentualOutros.toFixed(2)}%`);

console.log("----- DESAFIO 5 -----")

// Desafio 5

let recebeString = "Olá, Mundo!";

let inverteString = "";

for (let i = recebeString.length - 1; i >= 0; i--) {
  inverteString = inverteString + recebeString[i];
}

console.log("String original: " + recebeString);
console.log("String invertida: " + inverteString);

console.log("----------")