import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper.js'

export const validateGender = [
    check('name')

        .isLength({ min: 5 }).withMessage('El nombre tiene minimo 5 caracteres'),

    check('image')

        .isLength({ min: 5 }).withMessage('Minimo 5 caracteres'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export const validateUser = [
    
]

export const validateMovie = [

]

export const validateCharacter = [
    
]