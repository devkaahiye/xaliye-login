import express from 'express'
import { createUser, deletUser, getAllUser, getUserProfileById, login, updateUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/', getAllUser)
router.get('/profile/:id', getUserProfileById)
router.post('/', createUser)
router.post('/login', login)
router.put('/:id', updateUser)
router.delete('/:id', deletUser)

export default router;