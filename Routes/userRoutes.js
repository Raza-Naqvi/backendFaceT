const { Router } = require("express");
const userController = require("../Controller/userController");
const middleWareFunc = require("../Functions/userTokenMiddleware");

// const router = express.Router();

// router.post("/signUp", userController.signUp);
// router.post("/signIn", userController.signIn);
// // router.post("/getUsername", userController.getUserName);
// // router.post("/getEvents", userController.getEvents);
// // router.post("/getSingleEvent", userController.getSingleEvent);
// // router.post("/addTable", middleWareFunc, userController.addTable);
// // router.post("/getTabeles", userController.getTables);
// // router.post("/sendRequestToTable", middleWareFunc, userController.sendTableRequest);
// // router.post("/updateTableRequest", middleWareFunc, userController.acceptRejectTableRequest);

// export default router;

const category = Router()
    .post("/signUp", userController.signUp)
    .post("/signIn", userController.signIn)

module.exports = category;