import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { v4 } from 'uuid'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils'

export const AddStar: RequestHandler = async (req, res) => {
    const { name, description, urlImage, constellationId } = req.body

    try {
    const createdStar = await prisma.star.create({
        data: {
            id: v4(),
            name, 
            description,
            urlImage,
            constellationId,
        },
    })
    res.send(createdStar);
    res.status(StatusCodes.OK)
} catch (err) {
console.error(err)
const response = checkPrismaError(err, {

})
res.status(response.status)
res.send(response.message)
}
}