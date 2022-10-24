import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const recordSchema = new Schema({
    artist: String,
    title: String,
    releaseDate: Date,
    price: Number,
    stock: Number
});

const Record = model('Record', recordSchema);

export default Record;