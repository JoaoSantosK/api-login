import express, { response } from 'express'
const app = express()
app.use(express.json()) //Usando JSON
//Recomendação para chamar o express (do próprio site).
import { PrismaClient } from '@prisma/client' // < Inclusão do Prisma

const prisma = new PrismaClient() // < Inclusão do Prisma

/*
    1) Tipo de rota / Método HTTP
    2) Endereço
*/

//app.get('/users') //Pega os usuários
//app.post('/users') //Cria um usuário
//app.put('/users') // Edita um usuário
//app.delete('/users') // Deleta um usuário

app.post('/users', async (req, res) => {
    
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    
    res.status(201).json(req.body)
})

app.get('/users', async (req, res) => {
    
    let users = []
    if(req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
        const users = await prisma.user.findMany()
    }

    

    res.status(200).json(users)
})

app.put('/users/:id', async (req, res) => {
    
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    
    res.status(201).json(req.body)
})

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuário deletado com sucesso!"})
})

app.listen(3000) //Porta para ele rodar (padrão ser 3000) / Comando => node server.js
/*
Criar nossa API de usuários
1- Criar usuários
2- Listar todos os usuários
3- Editar um usuário
4- Deletar um usuário
*/