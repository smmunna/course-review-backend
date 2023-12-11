import { NextFunction, Request, Response } from "express";
import { courseValidationSchema } from "./course.validation";


const createCourse = async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = courseValidationSchema.validate(req.body)
    if (error) {
        next(error)
    }
    else {
        console.log(value)
    }
}


export const courseController = {
    createCourse,
}