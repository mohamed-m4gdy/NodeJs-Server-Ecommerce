import { Request, Response } from 'express';

const globalError = (_req: Request, res: Response) => {
  res.status(404).json({
    message: 'The Endpoint is Not defined',
  });
};

export default globalError;
