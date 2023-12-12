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

const getCourses = async (req: Request, res: Response, next: NextFunction) => {
    const { page, limit } = req.query
    try {
        const result = await courseService.getCourseFromDB(page, limit)
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
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const updateCourses = async (req: Request, res: Response, next: NextFunction) => {
    const value = req.body;
    const id = req.query.id;

    try {
        const result = await courseService.updateCoursesToDB(id, value)
        res.send({
            "success": true,
            "statusCode": 200,
            "message": "Course updated successfully",
            "data": result
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const getCourseByIdReviews = async (req: Request, res: Response) => {
    const id = req.params.courseId;
    try {
        const result = await courseService.getCourseByIdReviewsFromDB(id)
        res.send({
            "success": true,
            "statusCode": 200,
            "message": "Course updated successfully",
            "data": result
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong'
        })
    }
}


export const courseController = {
    createCourse,
    getCourses,
    updateCourses,
    getCourseByIdReviews
}