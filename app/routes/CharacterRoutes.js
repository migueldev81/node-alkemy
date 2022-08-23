import { Router } from 'express'
import { getCharacters, postCharacter, getCharacter, putCharacter, deleteCharacter, getCharacterMovies } from '../controllers/CharacterController.js'
import { validateCharacter } from '../middlewares/validates.js'
const router = Router();
router.get('/', getCharacters)
router.post('/', [validateCharacter], postCharacter)

router.get('/:id', getCharacter)
router.put('/:id', [validateCharacter], putCharacter)
router.delete('/:id', [validateCharacter], deleteCharacter)

router.get('/:characterId/movies', getCharacterMovies)

export default router;