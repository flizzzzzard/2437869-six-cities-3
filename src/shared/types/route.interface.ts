import { NextFunction, Request, Response } from 'express';
import { HttpMethod } from './http-methods.enum.js';
export interface Route {
  path: string;
  method: HttpMethod;
  handler: (req: Request, res: Response, next: NextFunction) => void;
}
