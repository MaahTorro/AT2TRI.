const { produto, conexao } = require("../config/database")

module.exports = (app) =>{
  app.get("/vencido", async (req, res)=>{

    conexao()

    const resultado = await produto.find({ status: 1 }).sort({validade:1})

    res.render("vencido.ejs", { resultado })
})

  app.get('/vencido/:id', async (req, res) =>{
    const { id } = req.params
    
    await produto.findOneAndUpdate({ _id: id }, {
      status: 1
    })
    res.redirect('/')
  })

  app.set('../views/vencido.ejs') 
}


    // pegar o id da rota
    // usar o findAndDelete
    // é noiss

    // pra pegar o id da rota é assim :)