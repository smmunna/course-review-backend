"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.courseValidationSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    instructor: joi_1.default.string().required(),
    categoryId: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    tags: joi_1.default.array().items(joi_1.default.object({
        name: joi_1.default.string().required(),
        isDeleted: joi_1.default.boolean().required(),
    })).required(),
    startDate: joi_1.default.string().required(),
    endDate: joi_1.default.string().required(),
    language: joi_1.default.string().required(),
    provider: joi_1.default.string().required(),
    durationInWeeks: joi_1.default.number().required(),
    details: joi_1.default.object({
        level: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
    }).required(),
});
