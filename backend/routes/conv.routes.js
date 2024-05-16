import express from 'express';
import { getConv, createConv, deleteConv, updateConv } from '../controllers/conv.controller.js';

const router = express.Router();

router.post('/getConv', getConv)
router.post('/createConv', createConv)
router.delete('/deleteConv', deleteConv)
router.post('/updateConv', updateConv)

export default router;