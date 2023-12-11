import { NextFunction, Request, Response } from "express";
import { reviewValidation } from "./review.validation";
import joiErrorHandle from "../../../middleware/joiError.middleware";
import { reviewService } from "./review.service";


const createReview = async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = reviewValidation.validate(req.body)
    if (error) {
        joiErrorHandle(error, req, res, next)
    }
    else {
        try {
            const result = await reviewService.createReviewToDB(value)
            res.send({
                "success": true,
                "statusCode": 201,
                "message": "Review created successfully",
                "data":result
            })
        } catch (error) {
            res.send({
                "success": true,
                "statusCode": 500,
                "message": "Something went wrong",
                "data":error
            })
        }
    }
}

export const reviewController = {
    createReview,
}