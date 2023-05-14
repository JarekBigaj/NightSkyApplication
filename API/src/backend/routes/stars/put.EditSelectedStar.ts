import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils'

export const EditSelectedStar: RequestHandler = async (req,res) => {

    const { id, name, description, urlImage, constellationId } = req.body
    try{
        const EditedStar = await prisma.star.update({
            where: {
              id
            },
            data: {
              name,
              description,
              urlImage,
              constellationId
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