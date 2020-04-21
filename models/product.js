const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        
    },
    category: {
        type: String,
        required: true
    },
    accessory: {
        type: String,
        required: true
    },
    prize: {
        type: Currency,
        required: true
    },
    noOfDaysToDelivery: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default:"M"
    },
    color: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    comments:[commentSchema]
},{
    timestamps: true
});



var Products = mongoose.model('Product', productSchema);

module.exports = Products;