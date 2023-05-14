import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils'

export const EditSelectedConstellations: RequestHandler = async (req,res) => {

    const { id, name } = req.body
    try{
        const EditedConstellations = await prisma.constellation.update({
            where: {
              id
            },
            data: {
              name,

            },
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