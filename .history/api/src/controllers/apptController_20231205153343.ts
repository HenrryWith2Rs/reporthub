import { Request, Response } from 'express';

export async function processApptRequest(req: Request, res: Response) {
  res.send('Hello from appointment controller');
}
