import express from 'express';
import { addProduct, upload, getProducts, setDiscount} from '../controllers/addproduct.controller.js';

const router = express.Router();

router.post('/', addProduct);
router.get('/',getProducts);
router.put('/',setDiscount);


export default router;