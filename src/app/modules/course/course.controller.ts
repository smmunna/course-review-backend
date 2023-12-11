import { NextFunction, Request, Response } from "express";
import { courseValidationSchema } from "./course.validation";
import { courseService } from "./course.service";
import handleSuccessResponse from "../../../middleware/successResponse.middleware";


const createCourse = async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = courseValidationSchema.validate(req.body)
    if (error) {
        next(error)
    }
    else {
        try {
            const result = await courseService.createCourseToDB(value)
            if (result) {
                handleSuccessResponse(result, req, res, next)
            }
        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }

    }
}




export const courseController = {
    createCourse,
}