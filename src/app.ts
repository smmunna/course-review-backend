import express, { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import cors from 'cors'
import Joi from 'joi'
import { courseRoutes } from './app/modules/course/course.route'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/courses', courseRoutes)


// Handling joi validation error
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Joi.ValidationError) {
        res.send({
            status: 400,
            message: "validation error",
            details: err.details.map((detail: any) => detail.message)
        })
    }
})

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})


export default app;