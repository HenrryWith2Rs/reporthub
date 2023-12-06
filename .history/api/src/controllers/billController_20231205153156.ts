import { Request, Response } from 'express';

export async function processBillRequest(req: Request, res: Response) {
  res.send('Hello from billing controller');
}
