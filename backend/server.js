import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import addProductRouter from './routes/addproduct.route.js';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());



app.use('/api/product',addProductRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});