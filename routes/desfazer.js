const { produto, conexao } = require("../config/database")

module.exports = (app) =>{
  app.get('/desfazer/:id', async (req, res) =>{
    const { id } = req.params
    const { redirect } = req.query
    
    await produto.findOneAndUpdate({ _id: id }, {
      status: 0
    })

    res.redirect(`/${redirect}`)
  }) 
} 