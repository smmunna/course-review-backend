import { Schema, model } from "mongoose";
import Review from "./review.interface";

const reviewSchema = new Schema<Review>({
    courseId: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true }
})

const reviewModel = model<Review>('review', reviewSchema)

export default reviewModel;