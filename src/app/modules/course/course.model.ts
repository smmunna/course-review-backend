import { Schema, model } from "mongoose";
import Course from "./course.interface";


const courseSchema = new Schema<Course>({
    title: { type: String, required: true},
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
})

const courseModel = model<Course>('course', courseSchema)

export default courseModel;