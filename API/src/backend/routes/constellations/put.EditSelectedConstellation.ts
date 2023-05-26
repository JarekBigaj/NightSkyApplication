import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils/prisma.utils'
import { ValidateAddConstellation } from '../../utils/validation.utils'

export const EditSelectedConstellation: RequestHandler = async (req,res) => {

    const { id, name, description, urlImage, isActive, isDead } = req.body
    const validatedData = ValidateAddConstellation(req.body)

    if (validatedData.error){
      console.log(validatedData.error)
      const response = {
          status: StatusCodes.INTERNAL_SERVER_ERROR,
          message: validatedData.error.details[0].message
      }
      res.status(response.status)
      res.send(response.message)
    }
    else {
    try{
        const EditedConstellations = await prisma.constellation.update({
            where: {
              id
            },
            data: {
              name,
              description,
              urlImage,
              isActive,
              isDead
            },
          })
        res.send(EditedConstellations)
        res.status(StatusCodes.OK)

    } catch (err) {
        console.error(err)
        const response = checkPrismaError(err, {
        
        })
        res.status(response.status)
        res.send(response.message)
        }
    }
  }