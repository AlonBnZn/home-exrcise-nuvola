import { Container } from "inversify";
import { TOKENS } from "./tokens";
import { IAdRepository } from "../ads/interfaces/ad.repository.interface";
import { AdRepository } from "../ads/ad.repository";
import { ICampaignRepository } from "../campaigns/interfaces/campaign.repository.interface";
import { CampaignRepository } from "../campaigns/campaign.repository";
import { IAdService } from "../ads/interfaces/ad.service.interface";
import { AdService } from "../ads/ad.service";
import { IAdController } from "../ads/interfaces/ad.controller.interface";
import { AdController } from "../ads/ad.controller";

const container = new Container();

container.bind<IAdRepository>(TOKENS.IAdRepository).to(AdRepository);
container
  .bind<ICampaignRepository>(TOKENS.ICampaignRepository)
  .to(CampaignRepository);
container.bind<IAdService>(TOKENS.IAdService).to(AdService);
container.bind<IAdController>(TOKENS.IAdController).to(AdController);

export { container };
