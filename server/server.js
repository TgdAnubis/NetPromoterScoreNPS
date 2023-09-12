const express = require("express")
const app = express() 

app.get("/", (req, res) => {
    const obj = [{title:"Bem vindo"}]
    res.send(obj)
})

app.listen(3000, () => {
    console.log("server iniciado na porta 3000")
})
