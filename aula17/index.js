const nome = 'Pedro Queiroz';
console.log(nome[0]);

const alunos = ['Pedro','Esther','Fred'];

alunos[alunos.length] = 'João';
alunos.push('Joca');
alunos.unshift('Carlos'); //adiciona no começo
alunos.pop(); // remove Joca (último elemento do array)
alunos.shift(); // remove Carlos (primeiro elemento do array)

delete alunos[2]; // remove Fred ( índice 2 );

console.log(alunos);
console.log(alunos[1]);
