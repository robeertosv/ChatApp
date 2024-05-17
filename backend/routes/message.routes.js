import express from 'express'
import { sendMessage, readMessage } from '../controllers/message.controller.js';

const router = express.Router();

router.post('/send', sendMessage);
router.post('/read', readMessage)
export default router;