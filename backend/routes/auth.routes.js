import express from 'express'
import { createAccount, login, logout, deleteAccount } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/resgister', createAccount)
router.post('/login', login)
router.post('/logout', logout)
router.delete('/deleteAccount', deleteAccount)

export default router;