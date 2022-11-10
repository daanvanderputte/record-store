import express from 'express';
import Record from '../models/record.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const records = await Record.find();
    return res.status(200).json(records);
});

router.post('/create', async (req, res) => {
    try {
        const {artist, title, releaseDate, price, stockQuantity} = req.body;
        const createdRecord = await Record.create({
            artist,
            title,
            releaseDate,
            price,
            stockQuantity
        });
        return res.status(200).json({message: 'Record Created', createdRecord}) 
    } catch (error) {
        return res.status(500).json({message: error.message})
}
});

export default router;