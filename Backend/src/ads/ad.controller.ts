import { IAdService } from "./interfaces/ad.service.interface";
import { TOKENS } from "./../config/tokens";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IAdController } from "./interfaces/ad.controller.interface";

@injectable()
export class AdController implements IAdController {
  constructor(@inject(TOKENS.IAdService) private adService: IAdService) {}

  async runCycle(req: Request, res: Response) {
    try {
      const result = await this.adService.runAdSelectionCycle();
      res.status(200).json(result);
    } catch (error) {
      console.error("Error running ad selection cycle:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
