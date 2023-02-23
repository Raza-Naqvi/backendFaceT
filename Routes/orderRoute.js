const { Router } = require("express");
const orderController = require("../Controller/orderController");

const category = Router()
    .post("/addOrder", orderController.addOrder)

module.exports = category;