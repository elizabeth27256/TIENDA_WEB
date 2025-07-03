import express from 'express';
import productosRoutes from './routes/productos';
const app = express();

app.use('/productos', productosRoutes)

app.listen(3000,()=>{
    console.log("La aplicación esta escuchando en el puerto 3000");
})

export default app;