/*Aluno 1- Responsável por criar o projeto no git e dar acesso aos outros - Eduardo 

Aluno 2 - Responsável por criar a função de listar todos os usuários acima de 18 anos. Erick 
//filter


Aluno 3 - Responsável por criar a função de listar todos os usuários inserindo mais uma informação para cada de ativo: true Thais kemyle
//map e spread...


Aluno 4 - Responsável por criar a função de adicionar um usuário. Hellen 
//push

Aluno 5- Responsável por criar a função de remover um usuário.   Eduardo */
//pop
//Tem que recever um usuario de parametro

//Resposta exercio 2:
let bancoDeDados = require('./usuarios.json')

const listarUsuariosMarioresDeidade = () => {
const lista = bancoDeDados.filter((usuario) => usuario.idade > 18)
return lista;

}

console.log("lista de usuarios acima de 18: ", listarUsuariosMarioresDeidade());

