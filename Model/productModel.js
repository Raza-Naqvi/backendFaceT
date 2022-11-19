const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String
    },
    company: {
        type: String
    },
    category: {
        type: String
    }
});

module.exports = mogoose.model("ProductSchema", productSchema);