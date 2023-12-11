import Joi from 'joi'

export const reviewValidation = Joi.object({
    courseId: Joi.string().required(),
    rating: Joi.number().required(),
    review: Joi.string().required()
})