const productModel = require("../Model/productModel");

exports.registerProduct = async (body) => {
    const newProduct = new productModel(body);
    await newProduct.save();
    return newProduct;
};

exports.fetchProduct = async () => {
    const fetchProduct = await productModel.find();
    return fetchProduct;
};

exports.countProduct = async () => {
    const total = await productModel.count();
    return total;
};

exports.fetchProductById = async (body) => {
    const result = await productModel.findOne({ _id: body._id });
    return result
};