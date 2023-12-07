import express from 'express';
const router = express.Router();

import { processApptRequest } from '../controllers/apptController';
import { processBillRequest } from '../controllers/billController';

const koreEndpoint = '/kore';
router.post(`${koreEndpoint}/appt`, processApptRequest);
router.post(`${koreEndpoint}/bill`, processBillRequest);

export default router;
