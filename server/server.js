import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import recordRoutes from './routes/recordRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log('Database Connected');
  })
  .catch((error) => {
    console.log(error.message);
    console.log('Error');
  });

app.use('/api/records', recordRoutes);
app.use('/api/orders', orderRoutes);

app.listen(3001, (req, res) => {
    console.log('Server is listening on port 3001');
});