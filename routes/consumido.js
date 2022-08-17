const { produto, conexao } = require("../config/database")

module.exports = (app) =>{
  app.get("/consumido", async (req, res)=>{

    conexao()

    const resultado = await produto.find({ status: 2 }).sort({validade:1})

    res.render("consumido.ejs", { resultado })
}) 

  app.get('/consumido/:id', async (req, res) =>{
    const { id } = req.params

    await produto.findOneAndUpdate({ _id: id }, {
      status: 2
    })
    res.redirect('/')
  })

  app.set('../views/consumido.ejs') 
}


    // pegar o id da rota :)))))))))))
    // usar o findAndDelete
    // é noiss

    // pra pegar o id da rota é assim :)