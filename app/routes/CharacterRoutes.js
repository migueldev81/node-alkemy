import { Router } from 'express'
import { getCharacters, postCharacter, getCharacter, putCharacter, deleteCharacter, getCharacterMovies } from '../controllers/CharacterController.js'
import { validateCharacter } from '../middlewares/validates.js'
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Character:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: the character name
 *              age:
 *                  type: number
 *                  description: the character age
 *              weigth:
 *                  type: number
 *                  description: the character weigth
 *              image:
 *                  type: string
 *                  description: the character imageURL
 *              history:
 *                  type: string
 *                  description: the character history
 */

/**
 * @swagger
 * /characters:
 *  get:
 *      summary: get all characters
 *      tags: [Character]
 *      responses:
 *          200:
 *              description: all characters!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Character'
*/
router.get('/', getCharacters)

/**
 * @swagger
 * /characters/{id}:
 *  get:
 *      summary: get a character by id
 *      tags: [Character]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the character id
 *      responses:
 *          200:
 *              description: character by id!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Character'
 *          400: 
 *              description: character not found
*/
router.get('/:id', getCharacter)

/**
 * @swagger
 * /characters/{characterId}/movies:
 *  get:
 *      summary: get a movies of character
 *      tags: [Character]
 *      parameters:
 *          - in: path
 *            name: characterId
 *            schema:
 *              type: string
 *            required: true
 *            description: characterId
 *      responses:
 *          200:
 *              description: get a movies of character
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Character'
 *          400: 
 *              description: character not found
*/
router.get('/:characterId/movies', getCharacterMovies)

/**
 * @swagger
 * /characters:
 *  post:
 *      summary: create a new character
 *      tags: [Character]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Character'
 *      responses:
 *          200:
 *              description: new character created!
*/
router.post('/', [validateCharacter], postCharacter)

/**
 * @swagger
 * /character/{id}:
 *  put:
 *      summary: update a character by id
 *      tags: [Character]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the character id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Character'
 *      responses:
 *          200:
 *              description: update character by id!
*/
router.put('/:id', [validateCharacter], putCharacter)

/**
 * @swagger
 * /characters/{id}:
 *  delete:
 *      summary: delete a character by id
 *      tags: [Character]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the character id
 *      responses:
 *          200:
 *              description: delete character by id
*/
router.delete('/:id', deleteCharacter)

export default router;