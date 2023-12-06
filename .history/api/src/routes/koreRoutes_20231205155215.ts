import express from 'express';
const router = express.Router();

import { processRequest } from '../controllers/apptController';
import { processBillRequest } from '../controllers/billController';

router.get('/kore/appt', processRequest);
router.get('/kore/bill', processBillRequest);

export default router;
