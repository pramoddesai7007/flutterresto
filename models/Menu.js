
const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    uniqueId: {
        type: String,
    },
    itemName: {
        type: String,
    },
    stockQty: {
        type: Number,
        default: 0
    },
    mainCategory: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'MainCategory' // Reference to the MainCategory schema
        },
        name: String
    }
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
