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

exports.totalProduct = async (req, res) => {
    try {
        const count = await productFuncs.countProduct();
        if (count) {
            return response.successResponse(req, res, count);
        } else {
            return response.failResponse(req, res, "Something went wrong");
        };
    } catch (e) {
        return response.errorResponse(req, res, e);
    };
};

exports.getProductById = async (req, res) => {
    try {
        const get = await productFuncs.fetchProductById(req.body);
        if (get) {
            return response.successResponse(res, res, get);
        } else {
            return response.failResponse(req, res, "Something Went Wrong");
        };
    } catch (e) {
        return response.errorResponse(req, res, e);
    };
};