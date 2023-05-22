import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../database'
import { checkPrismaError } from '../../utils/prisma.utils'
import { ValidateID } from '../../utils/validation.utils'

export const DeleteSelectedStar: RequestHandler = async (req,res) => {

    const { id } = req.body
    const validatedID = ValidateID(req.body)

    if (validatedID.error){
        console.log(validatedID.error)
        const response = {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: validatedID.error.details[0].message
        }
        res.status(response.status)
        res.send(response.message)
    }
    try{
        const DeletedStar = await prisma.star.update({
            where: {
              id
            },
            data: {
                isDead: true
            }
          })
        res.send(DeletedStar)
        res.status(StatusCodes.OK)

    } catch (err) {
        console.error(err)
        const response = checkPrismaError(err, {
        
        })
        res.status(response.status)
        res.send(response.message)
        }
}