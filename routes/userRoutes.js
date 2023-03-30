import express from 'express'
import { createUser, deletUser, getAllUser, getUserProfileById, login, updateUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/', getAllUser)
router.get('/profile/:id', getUserProfileById)
router.route('/').post(createUser)
router.route('/login').post(login)
router.put('/:id', updateUser)
router.delete('/:id', deletUser)

export default router;