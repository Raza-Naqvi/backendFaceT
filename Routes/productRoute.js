const { Router } = require("express");
const productController = require("../Controller/productController");
// const 

const category = Router()
    .post("/addProduct", productController.addProduct)
    .get("/getProducts", productController.listProduct)

module.exports = category;