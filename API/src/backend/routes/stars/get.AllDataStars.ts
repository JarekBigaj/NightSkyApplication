import { RequestHandler } from "express"
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils'

export const getAllDataStars: RequestHandler = async (req,res) => {
    const { name } = req.body
    try{
        const AllStars = await prisma.star.findMany({
            where: {
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