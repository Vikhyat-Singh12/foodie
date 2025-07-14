import express from 'express';
import dotenv from 'dotenv';

import addProductRouter from './routes/addproduct.route.js';
import testRoute from './routes/test.route.js';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 



app.use('/product',addProductRouter);
app.use('/test', testRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});