import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils/prisma.utils'

export const getAllDataConstellations: RequestHandler = async (req, res) => {
  const { name } = req.body
  try{
    const AllConstellations = await prisma.constellation.findMany({
      where: {
          name: {
              contains: name,
          }
      }
  });

    res.status(StatusCodes.OK)
    res.send(AllConstellations)
  } catch (err) {
    console.error(err)
    const response = checkPrismaError(err, {
    
    })
    res.status(response.status)
    res.send(response.message)
    }
}