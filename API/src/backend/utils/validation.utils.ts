import Joi from "joi";
import { StatusCodes, ReasonPhrases } from 'http-status-codes'

export const ValidateAddStar = (star: any) => {
    const StarSchema = Joi.object({
        id: Joi.string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
        .required(),

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

        constellationId: Joi.string()
        .length(36)
        .lowercase()
        .required(),

        isActive: Joi.boolean(),

        isDead: Joi.boolean()
    });

    return StarSchema.validate(star);
}

export const ValidateAddConstellation = (constellation: any) => {
    const constellationSchema = Joi.object({
        id: Joi.string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
        .required(),

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

        isActive: Joi.boolean(),

        isDead: Joi.boolean()

    });

    return constellationSchema.validate(constellation)

}

export const ValidateID = (ID: any) => {
    const IDSchema = Joi.object({
        id: Joi.string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
        .required()
    });

    return IDSchema.validate(ID)

}