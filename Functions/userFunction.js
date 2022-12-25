const userModel = require("../Model/userModel.js");

exports.registerUser = async (body) => {
    const newUser = new userModel(body);
    await newUser.save();
    return newUser;
};

exports.fetchUser = async (body) => {
    const uResult = await userModel.findOne({ email: body.email });
    return uResult;
};

exports.fetchUserById = async (body) => {
    const userById = await userModel.findOne({ _id: body._id });
    return userById
};

exports.fetchUserByPhone = async (body) => {
    const uResult = await userModel.findOne({ phone: body.phone });
    return uResult;
};

exports.updateProfile = async (body, userId) => {
    const profile = await userModel.findByIdAndUpdate(userId, { $set: body });
    return profile;
};

exports.forgotPassword = async (email) => {
    let user = await userModel.findOne({ email: email });
    return user;
};

exports.changePassword = async (body, userId) => {
    const pass = await userModel.findByIdAndUpdate(userId, { $set: { password: body.confirmPassword } });
    return pass;
};

exports.verify = async (otp) => {
    const code = await userModel.findOne({ otp: otp });
    return code;
};

exports.countUser = async () => {
    const count = await userModel.count();
    return count;
};