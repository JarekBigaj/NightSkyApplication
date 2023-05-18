import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils/prisma.utils'

export const DeleteSelectedStar: RequestHandler = async (req,res) => {

    const { id } = req.body
    try{
        const DeletedStar = await prisma.star.delete({
            where: {
              id
            }
          })

        res.status(StatusCodes.OK)

    } catch (err) {
        console.error(err)
        const response = checkPrismaError(err, {
        
        })
        res.status(response.status)
        res.send(response.message)
        }
}