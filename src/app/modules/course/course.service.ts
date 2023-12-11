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

export const courseService = {
    createCourseToDB,
    getCourseFromDB
}