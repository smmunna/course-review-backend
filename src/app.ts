import express, { Request, Response } from 'express'
import 'dotenv/config'
import cors from 'cors'
import { courseRoutes } from './app/modules/course/course.route'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/courses', courseRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;