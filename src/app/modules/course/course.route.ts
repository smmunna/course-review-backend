import express from "express"
import { courseController } from "./course.controller"

const router = express.Router()

router.post('/', courseController.createCourse)
router.get('/', courseController.getCourses)
router.put('/', courseController.updateCourses)
router.get('/:courseId/reviews',courseController.getCourseByIdReviews)

export const courseRoutes = router;