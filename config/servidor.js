const {urlencoded} = require("express")
const express = require("express")
const app = express()

const porta = process.env.PORT || 3030

app.use(urlencoded({extended:false}))

module.exports = {app,porta}