const response = require("../Functions/validateResponse");
const jwt = require("jsonwebtoken");
const userFuncs = require("../Functions/userFunction.js");
const userModel = require("../Model/userModel.js");

exports.signUp = async (req, res) => {
    try {
        const emailCheck = await userFuncs.fetchUser(req.body);
        if (emailCheck) {
            return response.failResponse(req, res, "this email already exists");
        };
        const result = await userFuncs.registerUser(req.body);
        return response.successResponse(req, res, result);
    } catch (error) {
        return response.errorResponse(req, res, error);
    };
};

exports.signIn = async (req, res) => {
    try {
        const result = await userFuncs.fetchUser(req.body);
        if (!result) {
            return response.failResponse(req, res, "no user found with this email!");
        };
        if (result.password !== req.body.password) {
            return response.failResponse(req, res, "incorrect password ");
        };
        const token = jwt.sign(
            {
                id: result.id,
                email: result.email,
                username: result.name,
            },
            "FaceT.FYP",
            { expiresIn: "5d" }
        );
        const data = { token: token, user: result };
        return response.successResponse(req, res, data);
    } catch (error) {
        return response.errorResponse(req, res, error);
    };
};

exports.updateProfile = async (req, res) => {
    try {
        const profile = await userFuncs.updateProfile(req.body, req.user.id);
        return response.successResponse(req, res, "Profile Updated");
    } catch (error) {
        return response.errorResponse(req, res, error);
    };
};

// exports.forgotPassword = async (req, res) => {
//     try {
//         const forgot = await userFuncs.forgotPassword(req.body.email);
//         return response.successResponse(req, res, forgot);
//     } catch (error) {
//         return response.errorResponse(req, res, error);
//     };
// };

// exports.newPassword = async (req, res) => {
//     try {
//         if (req.body.newPassword == req.body.confirmPassword) {
//             const password = await userFuncs.changePassword(req.body, req.user.id);
//         };
//         return response.successResponse(req, res, "Password changed successfully");
//     } catch (error) {
//         return response.errorResponse(req, res, error);
//     };
// };

// exports.verifyAccount = async (req, res) => {
//     try {
//         const check = await userFuncs.verify(req.body.otp);
//         return response.successResponse(req, res, check);
//     } catch (error) {
//         return response.errorResponse(req, res, error);
//     };
// };

exports.totalUser = async (req, res) => {
    try {
        const count = await userFuncs.countUser();
        if (count) {
            return response.successResponse(req, res, count);
        } else {
            return response.failResponse(req, res, "Something Went Wrong");
        };
    } catch (e) {
        return response.errorResponse(req, res, e);
    };
};

exports.getUserById = async (req, res) => {
    try {
        const get = await userFuncs.fetchUserById(req.body);
        if (get) {
            return response.successResponse(res, res, get);
        } else {
            return response.failResponse(req, res, "Something Went Wrong");
        };
    } catch (e) {
        return response.errorResponse(req, res, e);
    };
};