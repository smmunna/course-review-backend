import { Request, Response, NextFunction } from "express";

const handleSuccessResponse = (data: any, req: Request, res: Response, next: NextFunction) => {
    res.send({
        "success": true,
        "statusCode": 201,
        "message": "Course created successfully",
        "data": data
    })

    next()
}

export default handleSuccessResponse