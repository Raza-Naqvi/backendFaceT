const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    address: {
        type: String
    },
    user: {
        type: String,
        ref: "UserSchema"
    },
    product: {
        type: String,
        ref: "ProductSchema"
    },
});

module.exports = mongoose.model("OrderSchema", orderSchema);