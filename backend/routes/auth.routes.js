import express from 'express'
import { createAccount, login, logout, deleteAccount, validateAuth } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/resgister', createAccount)
router.post('/login', login)
router.post('/logout', logout)
router.delete('/deleteAccount', deleteAccount)
router.get('/validateAuth', validateAuth)

export default router;