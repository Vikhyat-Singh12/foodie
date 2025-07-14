import express from 'express';
import { addProduct, upload } from '../controllers/addproduct.controller.js';

const router = express.Router();

router.post('/', addProduct);


export default router;