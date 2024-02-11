const mongoose = require('mongoose');

const ShopSchema=  mongoose.Schema({
name: {
    type: String,
    required: true
},
varients: [],
prices: [],
category: {
    type: String,
    required: true
},
image: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
}, {timestamps: true})

const shopModel = mongoose.model('ShopCollection',ShopSchema );
module.exports= shopModel;