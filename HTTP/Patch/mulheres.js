const express = require("express") // aqui estou iniciando o express
const router = express.Router() // aqui estou configurando a primeira parte da rota
const { v4:uuidv4 } = require('uuid')

const app = express() // aqui estou iniciando o app
app.use(express.json())
const porta = 3333 // aqui estou criando a porta

// aqui estou criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Simaria Conceição',
        imagem: 'https://github.com/simariaconceicao.png',
        minibio: 'Desenvolvedora e Instutora',
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da PrograMaria',
    },
    {
        id: '3',
        nome: 'Nina da Hora',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Hacker antirracista',
    },
]

//GET
function mostraMulheres(request, response){
     response.json(mulheres)
}

//POST
function criaMulher (request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
    }
    listaDeMulheres.push(novaMulher),

    response.json(listaDeMulehres)
}

//PATCH
function corrigeMulher(request, response) {
    function EncontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }
        if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }
    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

//PORTA
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres)) // configurei a rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) // configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigiMulher)) // configurei a rota PATCh /mulheres/:id
app.listen(porta, mostraPorta) // servidor ouvindo a porta