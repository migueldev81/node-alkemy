import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper.js'

export const validateGender = [
    check('name')
        .isLength({ min: 5 }).withMessage('El nombre debe tiener un minimo 5 caracteres'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export const validateUser = [
    check('username')
        .isLength({ min: 5 }).withMessage('El username debe tiener un minimo 5 caracteres'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export const validateMovie = [

]

export const validateCharacter = [

]