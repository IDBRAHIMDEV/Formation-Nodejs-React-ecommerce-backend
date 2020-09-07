const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxLength: 150,
        trim: true
    },
    description: {
        type: String,
        require: true,
        maxLength: 2000
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        require: true
    },
    shipping: {
        type: Boolean,
        require: false,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', productSchema);