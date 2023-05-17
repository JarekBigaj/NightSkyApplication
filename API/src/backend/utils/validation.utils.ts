import Joi from "joi";
import { StatusCodes, ReasonPhrases } from 'http-status-codes'

export const ValidateAddStar = (star: any) => {
    const StarSchema = Joi.object({
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

        isActive: Joi.boolean()
    });

    return StarSchema.validate(star);
}

export const ValidateAddConstellation = (constellation: any) => {
    const constellationSchema = Joi.object({
        name: Joi.string()
        .min(2)
        .max(60)
        .lowercase()
        .required(),

        isActive: Joi.boolean()

    });

    return constellationSchema.validate(constellation)

}