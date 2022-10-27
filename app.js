/*Aluno 1- Responsável por criar o projeto no git e dar acesso aos outros - Eduardo 

Aluno 2 - Responsável por criar a função de listar todos os usuários acima de 18 anos. Erick 



Aluno 3 - Responsável por criar a função de listar todos os usuários inserindo mais uma informação para cada de ativo: true Thais kemyle


Aluno 4 - Responsável por criar a função de adicionar um usuário. Izaias pereira


Aluno 5- Responsável por criar a função de remover um usuário.   Hellen */


let bancoDeDados = require('./usuarios.json')

const removerUsuario = (idUsuario) => {
  const usuarioIndex = bancoDeDados.findIndex((usuario) => usuario.id === idUsuario)

  if (usuarioIndex < 0) {
    console.log("Usuário não encontrado");
    return;
  }

  bancoDeDados.splice(usuarioIndex, 1);
}
removerUsuario(8);
console.log("Lista de usuários com o usuário removido: ", bancoDeDados);

