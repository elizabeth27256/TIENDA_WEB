import express from 'express';
import { getProductos } from '../controller/productosController';

const router = express.Router();
router.get('/',getProductos);

export default router;