# API Login

API desenvolvida com **Node.js**, **Express**, **Prisma ORM** e **MongoDB**, criada com o objetivo de praticar a construção de rotas HTTP, manipulação de usuários e integração com banco de dados.

Atualmente, o projeto conta com as principais operações de um CRUD de usuários, permitindo criar, listar, editar e deletar registros.

---

## Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- MongoDB
- JavaScript
- JSON

---

## Sobre o projeto

Este projeto é uma API inicial para gerenciamento de usuários.

A aplicação utiliza o **Express** para criação das rotas HTTP e o **Prisma ORM** para intermediar a comunicação com o banco de dados **MongoDB**.

O MongoDB foi utilizado como banco de dados da aplicação, armazenando informações dos usuários, como nome, e-mail e idade.

Com o Prisma, foi possível estruturar o acesso aos dados de forma mais simples e organizada, além de utilizar o **Prisma Studio**, uma ferramenta que permite visualizar e gerenciar os registros diretamente pelo navegador.

---

## Funcionalidades atuais

- Criar usuários
- Listar usuários
- Filtrar usuários por dados enviados na query
- Editar usuários pelo ID
- Deletar usuários pelo ID

---

## Métodos HTTP utilizados

### Criar usuário

http
POST /users

Exemplo de corpo da requisição:

{
  "name": "João Santos",
  "email": "joao@email.com",
  "age": 20
}
Listar usuários
GET /users

Também é possível buscar usuários usando query params:

GET /users?name=João
Editar usuário
PUT /users/:id

Exemplo:

PUT /users/123

Exemplo de corpo da requisição:

{
  "name": "João Santos",
  "email": "novoemail@email.com",
  "age": 21
}
Deletar usuário
DELETE /users/:id

Exemplo:

DELETE /users/123

Resposta esperada:

{
  "message": "Usuário deletado com sucesso!"
}
Como executar o projeto

Clone o repositório:

git clone URL_DO_REPOSITORIO

Acesse a pasta do projeto:

cd api-login

Instale as dependências:

npm install

Execute o servidor:

node server.js

A API será executada em:

http://localhost:3000
Prisma e MongoDB

O projeto utiliza o Prisma ORM para facilitar a comunicação entre a API e o banco de dados MongoDB.

O MongoDB é responsável por armazenar os dados dos usuários, enquanto o Prisma fornece uma camada mais organizada para criar, buscar, editar e deletar registros.

Para visualizar e gerenciar os dados pelo navegador, utilize:

npx prisma studio

Isso abrirá uma interface visual onde é possível consultar, criar, editar e deletar registros do banco de dados.

Possíveis melhorias futuras
Criar o frontend da aplicação
Implementar tela de login
Implementar autenticação real com senha
Adicionar criptografia de senhas
Adicionar recuperação de senha
Implementar funcionalidade “Esqueci minha senha”
Adicionar login via redes sociais
Adicionar autenticação com JWT
Melhorar validação dos dados
Criar mensagens de erro mais detalhadas
Separar rotas, controllers e services
Melhorar a modelagem dos dados no MongoDB
Criar autenticação conectada ao banco de dados
Adicionar validação de campos únicos, como e-mail
Criar documentação da API
Status do projeto

Projeto em desenvolvimento.

Atualmente, a API possui as rotas principais de usuários e serve como base para futuras funcionalidades de autenticação e interface frontend.

Autor:
Desenvolvido por João Santos.
