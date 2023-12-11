"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    courseId: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true }
});
const reviewModel = (0, mongoose_1.model)('review', reviewSchema);
exports.default = reviewModel;
