import { Router } from 'express'
import { getGenders, postGender, getGender, putGender, deleteGender } from '../controllers/GenderController.js'
import { validateGender } from '../middlewares/validates.js'
const router = Router();
router.get('/', getGenders)
router.post('/', [validateGender], postGender)
router.get('/:id', getGender)
router.put('/:id', [validateGender], putGender)
router.delete('/:id', [validateGender], deleteGender)

export default router;