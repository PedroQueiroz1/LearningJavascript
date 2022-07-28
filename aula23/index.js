/*
Operadores lógicos
&& -> AND
|| -> OR
! -> NOT
*/

const usuario = 'Pedro';
const senha = '123456';
const checkUsuario = usuario == "Pedro";
const checkSenha = senha == "123456";
const vaiLogar = checkUsuario && checkSenha;
console.log(vaiLogar);
