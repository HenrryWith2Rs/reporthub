import { Request, Response } from 'express';

export async function processRequest(req: Request, res: Response) {
  res.send('Hello from billing controller');
}
