import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils'

export const getAllDataStars: RequestHandler = async (req, res) => {

  try{
    const AllStars = await prisma.star.findMany()

    res.status(StatusCodes.OK)
    res.send({ ...AllStars })
  } catch (err) {
    console.error(err)
    const response = checkPrismaError(err, {
    
    })
    res.status(response.status)
    res.send(response.message)
    }
}
