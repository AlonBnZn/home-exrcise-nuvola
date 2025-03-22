import { Request, Response } from "express";

export interface IAdController {
  runCycle(req: Request, res: Response): void;
}
