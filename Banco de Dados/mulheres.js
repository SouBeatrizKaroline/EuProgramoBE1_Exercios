const express = require("express") // aqui estou iniciando o express
const router = express.Router() // aqui estou configurando a primeira parte da rota
const { v4:uuidv4 } = require('uuid')

const conectaBancoDeDados = require('./bancoDeDados') //aqui estou ligando ao arquivo bancoDeDaos
conectaBancoDeDados() // aqui estou chamndo a função que conecta o banco de dados

const Mulher = require('./mulherModel')

const app = express() // aqui estou iniciando o app
app.use(express.json())
const porta = 3333 // aqui estou criando a porta

//GET
async function mostraMulheres(request, response){
     try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)
     
    }catch(erro){
        console.log(erro)
     }
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

function deletaMulher(request, response) {
    function todasMenosEla (mulher) {
        if (mulher.id != request.params.id) {

            return mulher

        }
    }

    const mulheresQueFicaram = listaDeMulheres.filter(todasMenosEla)
    response.json(mulheresQueFicaram)
}

//PORTA
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres)) // configurei a rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) // configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigiMulher)) // configurei a rota PATCh /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) // configurei rota DELETE /mulheres

app.listen(porta, mostraPorta) // servidor ouvindo a porta