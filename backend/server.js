import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("Error");
  });

app.listen(3000, (req, res) => {
    console.log("Server is listening on port 3000");
});