import { Request, Response, NextFunction } from 'express';
import Error from '../../interfaces/errors/errorInterface';

const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = error.status || 500;
  const message = error.message || 'Something Went Wrong !';
  res.status(status).json({
    status,
    message,
  });
};

export default errorMiddleware;
