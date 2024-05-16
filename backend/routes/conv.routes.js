import express from 'express';
import { getConv, createConv, updateConv, getAllConvs } from '../controllers/conv.controller.js';

const router = express.Router();

router.post('/getConv', getConv)
router.post('/createConv', createConv)
router.post('/getAllConvs', getAllConvs)
router.post('/updateConv', updateConv)

export default router;