import { NextFunction, Request, Response } from "express";
import { categoryService } from "./category.service";
import { categoryValidation } from "./category.validation";
import joiErrorHandle from "../../../middleware/joiError.middleware";


const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = categoryValidation.validate(req.body)
    if (error) {
        joiErrorHandle(error, req, res, next)
    }
    else {
        try {
            const result = await categoryService.createCategoryToDB(value)
            res.send({
                "success": true,
                "statusCode": 201,
                "message": "Category created successfully",
                "data": result
            })
        } catch (error) {
            res.send({
                "success": false,
                "statusCode": 500,
                "message": "Something went wrong",
                "data": error
            })
        }
    }
}

const getAllCategory = async (req: Request, res: Response) => {
    try {
        const result = await categoryService.getllAllCategory()
        res.send({
            "success": true,
            "statusCode": 200,
            "message": "Categories retrieved successfully",
            "data": result
        })
    } catch (error) {
        res.send({
            "success": true,
            "statusCode": 500,
            "message": "Something went wrong",
            "data": error
        })
    }
}

export const categoryController = {
    createCategory,
    getAllCategory,
}