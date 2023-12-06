import express from 'express';
const router = express.Router();

import { processRequest } from '../controllers/apptController';
import { processBillRequest } from '../controllers/billController';

const koreEndpoint = '/kore';
router.get(`${koreEndpoint}/appt`, processRequest);
router.get(`${koreEndpoint}/bill`, processBillRequest);

export default router;
