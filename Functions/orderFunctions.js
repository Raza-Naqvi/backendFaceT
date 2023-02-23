const orderModel = require("../Model/orderModel");

exports.registerOrder = async (body) => {
    const newOrder = orderModel(body);
    await newOrder.save();
    return newOrder;
};