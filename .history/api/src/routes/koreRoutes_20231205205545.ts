import express from 'express';
const router = express.Router();

import { processApptRequest } from '../controllers/apptController';
import { processBillRequest } from '../controllers/billController';

const koreEndpoint = '/kore';
router.get(`${koreEndpoint}/appt`, processApptRequest);
router.get(`${koreEndpoint}/bill`, processBillRequest);

export default router;
