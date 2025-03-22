import { inject, injectable } from "inversify";
import IAd from "./interfaces/campaign.interface";
import { ICampaignService } from "./interfaces/campaign.service.interface";
import { ICampaignRepository } from "./interfaces/campaign.repository.interface";
import { TOKENS } from "../config/tokens";
import { Campaign } from "./campaign.entity";

@injectable()
class Service implements ICampaignService {
  constructor(
    @inject(TOKENS.IAdRepository) private adRepository: ICampaignRepository
  ) {}
  getAllCampaigns(): Promise<Campaign[]> {
    throw new Error("Method not implemented.");
  }
  getCampaignById(id: number): Promise<Campaign | null> {
    throw new Error("Method not implemented.");
  }
}

export default Service;
