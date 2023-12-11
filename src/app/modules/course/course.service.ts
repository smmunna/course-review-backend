import Course from "./course.interface";
import courseModel from "./course.model";


const createCourseToDB = async (course: Course) => {
    const result = await courseModel.create(course)
    return result;
}

export const courseService = {
    createCourseToDB,
}