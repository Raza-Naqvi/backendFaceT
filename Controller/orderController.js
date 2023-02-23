const response = require("../Functions/validateResponse");
const orderFunc = require("../Functions/orderFunctions");
const userFunc = require("../Functions/userFunction");
const productFuncs = require("../Functions/productFunction");

exports.addOrder = async (req, res) => {
    try {
        const user = await userFunc.fetchUserById(req.body.userId);
        const product = await productFuncs.fetchProductById(req.body.proId);
        console.log("user", user, "product", product);
        if (user && product) {
            const newOrder = await orderFunc.registerOrder(req.body);
            if (newOrder) {
                return response.successResponse(req, res, newOrder);
            } else {
                return response.failResponse(req, res, "Something went wrong");
            };
        } else {
            return response.failResponse(req, res, "user or product not found");
        };
    } catch (e) {
        return response.errorResponse(req, res, e);
    };
};