import { Request, Response, NextFunction } from 'express';
import Joi from 'joi'

const joiErrorHandle = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Joi.ValidationError) {
        res.send({
            "success": false,
            "message": "Validation Error",
            "errorMessage": "gender is required. email is required.",
            details: err.details
        })
    }
    next()
}

export default joiErrorHandle;