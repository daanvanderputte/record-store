import express from 'express';
import Order from '../models/order.js';

const router = express.Router();

router.get('/', async(req, res) => {
    const orders = await Order.find();
    return res.status(200).json(orders);
});

router.post('/create', async(req,res) => {
    try {
        const {dateCreated, name, totalPrice} = req.body;
        const createdOrder = await Order.create({
            dateCreated,
            name,
            totalPrice,
        });
        return res.status(200).json({message: "Order was created", createdOrder});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

export default router;