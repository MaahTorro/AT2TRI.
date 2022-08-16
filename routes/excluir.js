const { produto, conexao } = require("../config/database")

module.exports = (app) =>{
  app.get('/excluir/:id', async (req, res) =>{
    const { id } = req.params
    
    await produto.findOneAndDelete({ _id: id });
    res.redirect('/')
  }) 
}


    // pegar o id da rota
    // usar o findAndDelete
    // é noiss

    // pra pegar o id da rota é assim:




