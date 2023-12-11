import express from 'express'
import { categoryController } from './category.controller'

const router = express.Router()

router.post('/', categoryController.createCategory)
router.get('/', categoryController.getAllCategory)

export const categoryRoutes = router;