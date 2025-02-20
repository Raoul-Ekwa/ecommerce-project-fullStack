const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    shippingAddress: {
        mobileNo: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true

        },
        houseNo: {
            type: Date,
            default: Date.now
        },
        landmark: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        }
    },
    PaymentMethod: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;