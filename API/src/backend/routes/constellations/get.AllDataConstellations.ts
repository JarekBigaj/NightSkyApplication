import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils'

export const getAllDataConstellations: RequestHandler = async (req, res) => {
  
  try{
    const AllConstellations = await prisma.constellation.findMany();

    res.status(StatusCodes.OK)
    res.send({ ...AllConstellations })
  } catch (err) {
    console.error(err)
    const response = checkPrismaError(err, {
    
    })
    res.status(response.status)
    res.send(response.message)
    }
}