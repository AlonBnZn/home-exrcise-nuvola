import { Router } from "express";
import { container } from "../config/inversify";
import { IAdController } from "./interfaces/ad.controller.interface";
import { TOKENS } from "../config/tokens";

const adController = container.get<IAdController>(TOKENS.IAdController);

const adRouter = Router();
adRouter.post("/run-cycle", adController.runCycle.bind(adController));

export { adRouter };
