import { successResponse, errorResponse, failResponse, } from "../funcs/validationResponse.js";
import jwt from "jsonwebtoken";
import * as userFuncs from "../Functions/userFunction";
import userModel from "../Model/userModel";

export const signUp = async (req, res) => {
    try {
        const emailCheck = await userFuncs.fetchUser(req.body);
        if (emailCheck) {
            return failResponse(req, res, "this email already exists");
        };
        const result = await userFuncs.registerUser(req.body);
        return successResponse(req, res, result);
    } catch (error) {
        return errorResponse(req, res, error);
    };
};

export const signIn = async (req, res) => {
    try {
        const result = await userFuncs.fetchUser(req.body);
        if (!result) {
            return failResponse(req, res, "no user found with this email!");
        }
        if (result.password !== req.body.password) {
            return failResponse(req, res, " incorrect password ");
        }
        const token = jwt.sign(
            {
                id: result.id,
                email: result.email,
                username: result.name,
            },
            "FaceT.FYP",
            { expiresIn: "5d" }
        );
        const data = { token: token, userId: result.id, firstLogin: result.firstLogin };
        return successResponse(req, res, data);
    }
    catch (error) {
        return errorResponse(req, res, error);
    }
};

export const updateProfile = async (req, res) => {
    try {
        const profile = await userFuncs.updateProfile(req.body, req.user.id);
        return successResponse(req, res, "Profile Updated");
    } catch (error) {
        return errorResponse(req, res, error);
    };
};

export const forgotPassword = async (req, res) => {
    try {
        const forgot = await userFuncs.forgotPassword(req.body.email);
        return successResponse(req, res, forgot);
    } catch (error) {
        return errorResponse(req, res, error);
    };
};

export const newPassword = async (req, res) => {
    try {
        if (req.body.newPassword == req.body.confirmPassword) {
            const password = await userFuncs.changePassword(req.body, req.user.id);
        };
        return successResponse(req, res, "Password changed successfully");
    } catch (error) {
        return errorResponse(req, res, error);
    };
};

export const verifyAccount = async (req, res) => {
    try {
        const check = await userFuncs.verify(req.body.otp);
        return successResponse(req, res, check);
    } catch (error) {
        return errorResponse(req, res, error);
    };
};

