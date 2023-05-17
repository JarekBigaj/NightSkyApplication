import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils/prisma.utils'

export const getDataSelectedStar: RequestHandler = async (req, res) => {
  const { id } = req.body
  try{
    const getStar = await prisma.star.findUnique({
      where: {
        id
      },
    })

    res.status(StatusCodes.OK)
    res.send({ ...getStar })
  } catch (err) {
    console.error(err)
    const response = checkPrismaError(err, {
    
    })
    res.status(response.status)
    res.send(response.message)
    }
}
