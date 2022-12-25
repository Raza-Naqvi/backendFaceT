const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    company: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model("ProductSchema", productSchema);