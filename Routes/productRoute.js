const { Router } = require("express");
const productController = require("../Controller/productController");
const { middleWareFunc } = require("../Functions/userTokenMiddleware");

const category = Router()
    .post("/addProduct", productController.addProduct)
    .get("/getProducts", productController.listProduct)
    .get("/totalProducts", middleWareFunc, productController.totalProduct)

module.exports = category;