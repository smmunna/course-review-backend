import Joi from "joi";

export const courseValidationSchema = Joi.object({
    title: Joi.string().required(),
    instructor: Joi.string().required(),
    categoryId: Joi.string().required(),
    price: Joi.number().required(),
    tags: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            isDeleted: Joi.boolean().required(),
        })
    ).required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    language: Joi.string().required(),
    provider: Joi.string().required(),
    durationInWeeks: Joi.number().required(),
    details: Joi.object({
        level: Joi.string().required(),
        description: Joi.string().required(),
    }).required(),
})