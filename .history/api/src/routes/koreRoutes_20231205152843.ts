import express from 'express';
const router = express.Router();

import { processRequest } from '../controllers/apptController';
import { processRequest } from '../controllers/billController';

router.get('/kore/appt', processRequest);
router.get('/kore/bill', processRequest);

export default router;
