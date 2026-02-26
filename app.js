const express = require('express');
const multer = require('multer')
const app =express()

// destino da imagem
const upload = multer({desr: 'img/'})

// ficar acessivel no front
app.use('/img',express.static('img'))

// expor a pasta publica
app.use(express.static('public'))

// o codigo fica rodando e nao para
app.listen(3000,()=> console.log("rodando em http://localhost:3000"))

app.get("/", async (req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        
    }
})