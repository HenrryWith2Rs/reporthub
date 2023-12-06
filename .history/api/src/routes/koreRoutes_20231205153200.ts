import express from 'express';
const router = express.Router();

import { processApptRequest } from '../controllers/apptController';
import { processBillRequest } from '../controllers/billController';

router.get('/kore/appt', processApptRequest);
router.get('/kore/bill', processBillRequest);

export default router;
