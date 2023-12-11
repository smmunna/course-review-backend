"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    instructor: { type: String, required: true },
    categoryId: { type: String, required: true },
    price: { type: Number, required: true },
    tags: [
        {
            name: { type: String, required: true },
            isDeleted: { type: Boolean, required: true },
        }
    ],
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    language: { type: String, required: true },
    provider: { type: String, required: true },
    durationInWeeks: { type: Number, required: true },
    details: {
        level: { type: String, required: true },
        description: { type: String, required: true }
    }
});
const courseModel = (0, mongoose_1.model)('course', courseSchema);
exports.default = courseModel;
