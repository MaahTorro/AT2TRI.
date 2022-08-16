const mongoose = require('mongoose')

const conexao = async() =>{
    const atlas = await mongoose.connect('mongodb+srv://userAT:230205@fiaptec.n8xny.mongodb.net/test')
}
const modelo = mongoose.Schema({
    produto:String,
    validade:Date,
    status:{type:Number,default:0}
})

const produto = mongoose.model('produto',modelo)

module.exports = {conexao,produto}