import express from 'express';
import { addProduct, upload, getProducts } from '../controllers/addproduct.controller.js';

const router = express.Router();

router.post('/', addProduct);
router.get('/',getProducts);


export default router;