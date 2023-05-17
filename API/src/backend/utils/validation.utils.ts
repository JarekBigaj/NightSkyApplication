import Joi from "joi";

const validateAddStar = Joi.object({
    name: Joi.string()
    .min(2)
    .max(60)
    .lowercase()
    .required(),

    description: Joi.string()
    .min(10)
    .max(255)
    .required(),

    urlImage: Joi.string()
    .min(10)
    .max(255)
    .required(),

    constellationID: Joi.string()
    .length(36)
    .lowercase()
    .required(),

    isActive: Joi.boolean()
})

const validateAddContellation = Joi.object({
    name: Joi.string()
    .min(2)
    .max(60)
    .lowercase()
    .required(),

    description: Joi.string()
    .min(10)
    .max(255)
    .required(),

    urlImage: Joi.string()
    .min(10)
    .max(255)
    .required(),

    constellationID: Joi.string()
    .length(36)
    .lowercase()
    .required(),

    isActive: Joi.boolean()

})