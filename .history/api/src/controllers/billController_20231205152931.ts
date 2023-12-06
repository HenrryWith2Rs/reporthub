import { Request, Response } from 'express';

export async function billRequest(req: Request, res: Response) {
  res.send('Hello from billing controller');
}
