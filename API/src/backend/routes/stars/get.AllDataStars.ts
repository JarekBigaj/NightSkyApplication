import { RequestHandler } from "express"
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils/prisma.utils'

export const getAllDataStars: RequestHandler = async (req,res) => {
    const name  = req.query.name as string
    const constellationId  = req.query.constellationId as string
    try{
        const AllStars = await prisma.star.findMany({
            where: {
                constellationId: constellationId,
                name: {
                    contains: name,
                }
            }
        });


        res.send(AllStars)
        res.status(StatusCodes.OK)

    } catch (err) {
        console.error(err)
        const response = checkPrismaError(err, {
        
        })
        res.status(response.status)
        res.send(response.message)
        }
}