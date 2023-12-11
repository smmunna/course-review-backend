import express from "express"
import { courseController } from "./course.controller"

const router = express.Router()

router.post('/', courseController.createCourse)
router.get('/', courseController.getCourses)
router.put('/', courseController.updateCourses)

export const courseRoutes = router;