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

router.get('/:id', getCharacter)
router.put('/:id', [validateCharacter], putCharacter)
router.delete('/:id', [validateCharacter], deleteCharacter)
router.get('/:characterId/movies', getCharacterMovies)

export default router;