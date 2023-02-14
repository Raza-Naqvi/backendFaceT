const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pointSchema = new Schema({
    type: {
        type: String,
        enum: ["Point"],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    picture: {
        type: String
    },
    city: {
        type: String
    },
    // image: {
    //     type: String
    // },
    isAdmin: {
        type: Number,
        default: 0
    },
    isDelete: {
        type: Number,
        default: 0
    }
    // geometry: {
    //     type: pointSchema,
    //     default: {
    //         type: "point",
    //         coordinates: [0, 0]
    //     },
    //     index: "2dsphere"
    // },
});

module.exports = mongoose.model("UserSchema", userSchema);