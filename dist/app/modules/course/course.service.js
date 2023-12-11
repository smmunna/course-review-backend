"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseService = void 0;
const course_model_1 = __importDefault(require("./course.model"));
const createCourseToDB = (course) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.default.create(course);
    return result;
});
const getCourseFromDB = (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 10;
    const skip = (pageNumber - 1) * limitNumber;
    const result = yield course_model_1.default.find().skip(skip).limit(limit);
    const total = yield course_model_1.default.countDocuments();
    const finalResult = {
        pageNumber,
        limitNumber,
        result,
        total
    };
    return finalResult;
});
const updateCoursesToDB = (id, value) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.default.findByIdAndUpdate(id, value, { new: true });
    return result;
});
exports.courseService = {
    createCourseToDB,
    getCourseFromDB,
    updateCoursesToDB,
};
