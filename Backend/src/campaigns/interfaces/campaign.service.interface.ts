import { Campaign } from "../campaign.entity";

export interface ICampaignService {
  getAllCampaigns(): Promise<Campaign[]>;
  getCampaignById(id: number): Promise<Campaign | null>;
}
