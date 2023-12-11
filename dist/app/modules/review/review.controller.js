"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewController = void 0;
const review_validation_1 = require("./review.validation");
const joiError_middleware_1 = __importDefault(require("../../../middleware/joiError.middleware"));
const review_service_1 = require("./review.service");
const createReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = review_validation_1.reviewValidation.validate(req.body);
    if (error) {
        (0, joiError_middleware_1.default)(error, req, res, next);
    }
    else {
        try {
            const result = yield review_service_1.reviewService.createReviewToDB(value);
            res.send({
                "success": true,
                "statusCode": 201,
                "message": "Review created successfully",
                "data": result
            });
        }
        catch (error) {
            res.send({
                "success": true,
                "statusCode": 500,
                "message": "Something went wrong",
                "data": error
            });
        }
    }
});
exports.reviewController = {
    createReview,
};
