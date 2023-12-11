"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.reviewValidation = joi_1.default.object({
    courseId: joi_1.default.string().required(),
    rating: joi_1.default.number().required(),
    review: joi_1.default.string().required()
});
