/*Aluno 1- Responsável por criar o projeto no git e dar acesso aos outros - Eduardo 

Aluno 2 - Responsável por criar a função de listar todos os usuários acima de 18 anos. Erick





Aluno 3 - Responsável por criar a função de listar todos os usuários inserindo mais uma informação para cada de ativo: true Thais kemyle










Aluno 4 - Responsável por criar a função de adicionar um usuário. Izaias pereira










Aluno 5- Responsável por criar a função de remover um usuário.   Eduardo */




//Não consegui utilizar o require!!!!!!! Então criei uma const array com o .js
 

const listaDeUsuarios = [
    {
      "id": 1,
      "nome": "John Brendon",
      "idade": 20,
      "sexo": "M",
      "email": "john@gmail.com",
      "telefone": "999999999"
    },
    {
      "id": 2,
      "nome": "Marta Campos",
      "idade": 17,
      "sexo": "F",
      "email": "marta@gmail.com",
      "telefone": "999999999"
    },
    {
      "id": 3,
      "nome": "Eduardo Silva",
      "idade": 15,
      "sexo": "M",
      "email": "edu@gmail.com",
      "telefone": "999999999"
    },
    {
      "id": 4,
      "nome": "Fernanda Ribeiro",
      "idade": 26,
      "sexo": "F",
      "email": "feferibeiro@gmail.com",
      "telefone": "999999999"
    },
    {
      "id": 5,
      "nome": "Marcos Costa",
      "idade": 20,
      "sexo": "M",
      "email": "marcos@gmail.com",
      "telefone": "999999999"
    },
    {
      "id": 6,
      "nome": "Janaína Souza",
      "idade": 40,
      "sexo": "F",
      "email": "janaina@gmail.com",
      "telefone": "999999999"
    },
  ]






console.log (listaDeUsuarios)

console.log(listaDeUsuarios.map((lista) => {
    return lista.idade
}))


console.log(listaDeUsuarios.filter((lista) => lista.idade >= 18))



