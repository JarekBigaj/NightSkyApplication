import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils'

export const getDataSelectedConstellation: RequestHandler = async (req, res) => {
  const { id } = req.body
  try{
    const getConstellation = await prisma.constellation.findUnique({
      where: {
        id
      },
    })

    res.status(StatusCodes.OK)
    res.send({ ...getConstellation })
  } catch (err) {
    console.error(err)
    const response = checkPrismaError(err, {
    
    })
    res.status(response.status)
    res.send(response.message)
    }
}
