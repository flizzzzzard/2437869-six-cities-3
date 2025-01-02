import { NextFunction, Request, Response } from 'express';
import { HttpMethod } from './http-methods.enum.js';
import { Middleware } from '../middleware/middleware.interface.js';
export interface IRoute {
  path: string;
  method: HttpMethod;
  handler: (req: Request, res: Response, next: NextFunction) => void;
  middlewares?: Middleware[];
}
