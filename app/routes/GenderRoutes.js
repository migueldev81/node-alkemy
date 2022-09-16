import { Router } from 'express'
import { getGenders, postGender, getGender, putGender, deleteGender } from '../controllers/GenderController.js'
import { validateGender } from '../middlewares/validates.js'
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Gender:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: the character name
 *              image:
 *                  type: string
 *                  description: the character imageURL
 */

/**
 * @swagger
 * /genders:
 *  get:
 *      summary: get all genders
 *      tags: [Gender]
 *      responses:
 *          200:
 *              description: all genders!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Gender'
*/
router.get('/', getGenders)

/**
 * @swagger
 * /genders/{id}:
 *  get:
 *      summary: get a gender by id
 *      tags: [Gender]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the gender id
 *      responses:
 *          200:
 *              description: gender by id!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Gender'
 *          400: 
 *              description: gender not found
*/
router.get('/:id', getGender)

/**
 * @swagger
 * /genders:
 *  post:
 *      summary: create a new gender
 *      tags: [Gender]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Gender'
 *      responses:
 *          200:
 *              description: new gender created!
*/
router.post('/', [validateGender], postGender)

/**
 * @swagger
 * /genders/{id}:
 *  put:
 *      summary: update a gender
 *      tags: [Gender]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the gender id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Gender'
 *      responses:
 *          200:
 *              description: update gender by id!
*/
router.put('/:id', [validateGender], putGender)

/**
 * @swagger
 * /genders/{id}:
 *  delete:
 *      summary: delete gender!
 *      tags: [Gender]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the gender id
 *      responses:
 *          200:
 *              description: delete gender!
*/
router.delete('/:id', deleteGender)

export default router;