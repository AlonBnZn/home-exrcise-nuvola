import { injectable } from "inversify";
import { Repository } from "typeorm";
import { AppDataSource } from "../config/database";
import { Campaign } from "./campaign.entity";
import { ICampaignRepository } from "./interfaces/campaign.repository.interface";

@injectable()
export class CampaignRepository implements ICampaignRepository {
  private repository: Repository<Campaign>;

  constructor() {
    this.repository = AppDataSource.getRepository(Campaign);
  }

  async findAll(): Promise<Campaign[]> {
    return this.repository.find({ relations: ["ads"] });
  }

  async findById(id: string): Promise<Campaign | null> {
    return this.repository.findOne({ where: { id }, relations: ["ads"] });
  }
}
