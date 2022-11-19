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