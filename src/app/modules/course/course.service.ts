import reviewModel from "../review/review.model";
import Course from "./course.interface";
import courseModel from "./course.model";


const createCourseToDB = async (course: Course) => {
    const result = await courseModel.create(course)
    return result;
}

const getCourseFromDB = async (page: any, limit: any) => {
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 10;
    const skip = (pageNumber - 1) * limitNumber;
    const result = await courseModel.find().skip(skip).limit(limit)
    const total = await courseModel.countDocuments();
    const finalResult = {
        pageNumber,
        limitNumber,
        result,
        total
    }
    return finalResult;
}

const updateCoursesToDB = async (id: any, value: any) => {
    const result = await courseModel.findByIdAndUpdate(id, value, { new: true })
    return result;
}

const getCourseByIdReviewsFromDB = async (courseId: any) => {
    const course = await courseModel.findById(courseId)
    const reviews = await reviewModel.find({ courseId: courseId })
    const result = {
        course,
        reviews
    }

    return result;
}

export const courseService = {
    createCourseToDB,
    getCourseFromDB,
    updateCoursesToDB,
    getCourseByIdReviewsFromDB
}