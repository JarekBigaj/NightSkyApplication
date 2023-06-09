
import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { v4 } from 'uuid'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils'

export const AddConstellation: RequestHandler = async (req, res) => {
    const { name } = req.body

    try {
    const createdConstellation = await prisma.constellation.create({
        data: {
            id: v4(),
            name
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