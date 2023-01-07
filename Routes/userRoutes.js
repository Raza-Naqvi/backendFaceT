const { Router } = require("express");
const userController = require("../Controller/userController");
const { middleWareFunc } = require("../Functions/userTokenMiddleware");

const category = Router()
    .post("/signUp", userController.signUp)
    .post("/signIn", userController.signIn)
    .get("/totalUser", middleWareFunc, userController.totalUser)
    .get("/getUserById", middleWareFunc, userController.getUserById)

module.exports = category;