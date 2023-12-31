"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const course_controller_1 = require("./course.controller");
const router = express_1.default.Router();
router.post('/', course_controller_1.courseController.createCourse);
router.get('/', course_controller_1.courseController.getCourses);
router.put('/', course_controller_1.courseController.updateCourses);
router.get('/:courseId/reviews', course_controller_1.courseController.getCourseByIdReviews);
exports.courseRoutes = router;
