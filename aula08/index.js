// EXERCÍCIO
const nome = `Luiz Otávio`;
const sobrenome = `Miranda`;
const idade = 30;
const peso = 84;
const altura = 1.8;
const anoAtual = 2022;
let imc; // peso / (altura * altura);
let calculoIMC = 84 / (altura*altura);
let anoNascimento;
let calculoAnoNascimento = anoAtual - idade;

console.log(`%s %s tem `,nome,sobrenome, +idade+` anos, pesa ${peso} kg \ntem ${altura} de altura e seu IMC é de ${calculoIMC} \n${nome} nasceu em ${calculoAnoNascimento}`);
