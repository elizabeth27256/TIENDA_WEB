import express from 'express';

const app = express()

app.get("/", (req, res)=>{
    res.send("OK")
})

app.listen(3000,()=>{
    console.log("La aplicacion esta corriendo en el puerto 3000")
})