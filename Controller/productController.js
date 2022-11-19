const response = require("../Functions/validateResponse");
const productFuncs = require("../Functions/productFunction");

exports.addProduct = async (req, res) => {
    try {
        const add = await productFuncs.registerProduct(req.body);
        if (add) {
            return response.successResponse(req, res, add);
        } else {
            return response.failResponse(req, res, "something went wrong");
        };
    } catch (e) {
        return response.errorResponse(req, res, e);
    };
};

exports.listProduct = async (req, res) => {
    try {
        const list = await productFuncs.fetchProduct();
        if (list) {
            return response.successResponse(req, res, list);
        } else {
            return response.failResponse(req, res, "Something went wrong");
        };
    } catch (e) {
        return response.errorResponse(req, res, e);
    };
};