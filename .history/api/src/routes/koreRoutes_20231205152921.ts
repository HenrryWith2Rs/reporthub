import express from 'express';
const router = express.Router();

import { processRequest as apptRequest } from '../controllers/apptController';
import { processRequest as billRequest } from '../controllers/billController';

router.get('/kore/appt', processRequest);
router.get('/kore/bill', processRequest);

export default router;
