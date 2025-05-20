import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDb from './config/db.js';
import connectCloudinary from './config/cloudinary.js';

import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

    

//App config
const app = express();
const port = process.env.PORT || 5000
connectDb()
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order',orderRouter)

app.get('/', (req, res) => {
    res.status(200).send({ message: "welcome to first ecommerce website", status: true })
})




app.listen(port, () => {
    console.log(`server connected on port: http://localhost:${port}`)
})