/*const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Queiroz',
    idade: 23
};

console.log(pessoa.nome);
console.log(pessoa.idade);
*/

function criaPessoa (nome,sobrenome,idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const alguem = {
    nome: 'Alguem',
    idade: 10,
    fala(){
        console.log(`${this.nome} está falando oi...`);
    }
};

alguem.fala();

const pessoa = criaPessoa('Pedro','Queiroz',23);
console.log(pessoa.nome);