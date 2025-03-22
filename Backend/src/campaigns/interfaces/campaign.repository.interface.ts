import { Campaign } from "../campaign.entity";

export interface ICampaignRepository {
  findAll(): Promise<Campaign[]>;
  findById(id: string): Promise<Campaign | null>;
}
