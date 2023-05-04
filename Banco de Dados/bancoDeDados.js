const mongoose = require('mongoose')

async function conectaBancoDeDados() {
    try{
        console.log('Conexão com o banco de dados iniciou')

        await mongoose.connect('mongodb+srv://helloworld:bOqNBNmVcttLjPo8@clustermulheres.')

        console.log('Conexão com o banco de dados feita com sucesso!')

    }     catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancodeDados