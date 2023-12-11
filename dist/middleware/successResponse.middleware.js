"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleSuccessResponse = (data, req, res, next) => {
    res.send({
        "success": true,
        "statusCode": 201,
        "message": "Course created successfully",
        "data": data
    });
    next();
};
exports.default = handleSuccessResponse;
