
import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { v4 } from 'uuid'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils/prisma.utils'
import { ValidateAddConstellation } from '../../utils/validation.utils'


export const AddConstellation: RequestHandler = async (req, res) => {
    req.body.id = v4();
    const {id, name, description, urlImage, isActive } = req.body
    const validatedData = ValidateAddConstellation(req.body)

    if (validatedData.error){
        console.log(validatedData.error)
        const response = {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: validatedData.error.details[0].message
        }
        res.status(response.status)
        res.send(response.message)
    }
    else {
    try {
    const createdConstellation = await prisma.constellation.create({
        data: {
            id,
            name,
            description,
            urlImage,
            isActive
        },
    })
    res.send(createdConstellation);
    res.status(StatusCodes.OK)
    } catch (err) {
        console.error(err)
        const response = checkPrismaError(err, {

        })
    res.status(response.status)
    res.send(response.message)
    }
    }
}