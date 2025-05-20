import express from 'express';

import { placeOrder, placeOrderStripe, placeOrderRazerpay, allOrders, userOrders, updateStatus, verifyStripe } from '../Controllers/orderController.js';
import adminAuth from '../Middleware/adminAuth.js';
import authUser from '../Middleware/auth.js';

const orderRouter = express.Router();

//Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//  Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazerpay)

//User Features
orderRouter.post('/userorders',authUser,userOrders)

// verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter