const { produto, conexao } = require("../config/database")

module.exports = (app)=>{
    app.get("/cadastro", (req, res)=>{
        res.render("cadastro.ejs")  
    })

    app.post('/cadastro', async(req,res)=>{
        conexao()
        
        console.log(req.body);
        const novo = await new produto({
            produto:req.body.produto,
            validade:req.body.validade
        }).save()
        
        res.redirect('/cadastro')
    })

    app.set('../views/cadastro.ejs') 
}