import { Request, Response } from "express";


const createCourse = async (req: Request, res: Response) => {
    console.log('I am requesting..')
}


export const courseController = {
    createCourse,
}