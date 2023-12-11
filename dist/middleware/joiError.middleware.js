"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const joiErrorHandle = (err, req, res, next) => {
    if (err instanceof joi_1.default.ValidationError) {
        res.send({
            "success": false,
            "message": "Validation Error",
            "errorMessage": "gender is required. email is required.",
            details: err.details
        });
    }
    next();
};
exports.default = joiErrorHandle;
