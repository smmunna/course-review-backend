import express, { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import cors from 'cors'
import { courseRoutes } from './app/modules/course/course.route'
import joiErrorHandle from './middleware/joiError.middleware'
import handleSuccessResponse from './middleware/successResponse.middleware'
import { categoryRoutes } from './app/modules/category/category.route'
import { reviewRoutes } from './app/modules/review/review.route'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/course', courseRoutes)
app.use('/api/courses', courseRoutes)

app.use('/api/categories', categoryRoutes)

app.use('/api/reviews', reviewRoutes)


// Handling joi validation error
app.use(joiErrorHandle)
app.use(handleSuccessResponse)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})


export default app;