const { Router } = require("express");
const productController = require("../Controller/productController");
const { middleWareFunc } = require("../Functions/userTokenMiddleware");

const category = Router()
    .post("/addProduct", middleWareFunc, productController.addProduct)
    .get("/getProducts", productController.listProduct)
    .get("/totalProducts", middleWareFunc, productController.totalProduct)
    .get("/getProductById", middleWareFunc, productController.getProductById)

module.exports = category;