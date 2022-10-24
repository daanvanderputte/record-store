import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const orderSchema = new Schema({
    dateCreated:{type:Date, default:Date.now},
    name:{type:String, required:true},
    totalPrice:{type:Number, required:true}
});

const Order = model('Order', orderSchema);

export default Order;