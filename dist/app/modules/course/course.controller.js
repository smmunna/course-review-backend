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
exports.courseController = void 0;
const course_validation_1 = require("./course.validation");
const course_service_1 = require("./course.service");
const successResponse_middleware_1 = __importDefault(require("../../../middleware/successResponse.middleware"));
const createCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = course_validation_1.courseValidationSchema.validate(req.body);
    if (error) {
        next(error);
    }
    else {
        try {
            const result = yield course_service_1.courseService.createCourseToDB(value);
            if (result) {
                (0, successResponse_middleware_1.default)(result, req, res, next);
            }
        }
        catch (error) {
            res.send({
                success: false,
                message: error
            });
        }
    }
});
const getCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit } = req.query;
    try {
        const result = yield course_service_1.courseService.getCourseFromDB(page, limit);
        res.send({
            "success": true,
            "statusCode": 200,
            "message": "Courses retrieved successfully",
            "meta": {
                "page": result.pageNumber,
                "limit": result.limitNumber,
                "total": result.total
            },
            "data": result.result
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong'
        });
    }
});
const updateCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const value = req.body;
    const id = req.query.id;
    try {
        const result = yield course_service_1.courseService.updateCoursesToDB(id, value);
        res.send({
            "success": true,
            "statusCode": 200,
            "message": "Course updated successfully",
            "data": result
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong'
        });
    }
});
const getCourseByIdReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.courseId;
    try {
        const result = yield course_service_1.courseService.getCourseByIdReviewsFromDB(id);
        res.send({
            "success": true,
            "statusCode": 200,
            "message": "Course updated successfully",
            "data": result
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong'
        });
    }
});
exports.courseController = {
    createCourse,
    getCourses,
    updateCourses,
    getCourseByIdReviews
};
