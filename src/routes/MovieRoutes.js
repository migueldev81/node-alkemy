import { Router } from 'express'
import { getMovies, postMovie, getMovie, putMovie, deleteMovie } from '../controllers/MovieController.js'
import { validateMovie } from '../middlewares/validates.js';
const router = Router();

router.get('/', getMovies)
router.post('/',[validateMovie], postMovie)

//ByParams
router.get('/:id', getMovie)
router.put('/:id', [validateMovie],putMovie)
router.delete('/:id', deleteMovie)

export default router;