import Review from "./review.interface";
import reviewModel from "./review.model";


const createReviewToDB = async(review:Review) =>{
    const result = await reviewModel.create(review)
    return result
}

export const reviewService = {
    createReviewToDB,
}