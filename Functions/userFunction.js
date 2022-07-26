import userModel from "../Model/userModel";

export const registerUser = async (body) => {
    const newUser = new userModel(body);
    await newUser.save();
    return newUser;
};

export const fetchUser = async (body) => {
    const uResult = await userModel.findOne({ email: body.email });
    return uResult;
};

export const fetchUserById = async (body) => {
    const userById = await userModel.findOne({ _id: body._id });
    return userById
};

export const fetchUserByPhone = async (body) => {
    const uResult = await userModel.findOne({ phone: body.phone });
    return uResult;
};

export const updateProfile = async (body, userId) => {
    const profile = await userModel.findByIdAndUpdate(userId, { $set: body });
    return profile;
};

export const forgotPassword = async (email) => {
    let user = await userModel.findOne({ email: email });
    return user;
};

export const changePassword = async (body, userId) => {
    const pass = await userModel.findByIdAndUpdate(userId, { $set: { password: body.confirmPassword } });
    return pass;
};

export const verify = async (otp) => {
    const code = await userModel.findOne({ otp: otp });
    return code;
};

