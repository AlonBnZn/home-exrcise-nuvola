import { injectable } from "inversify";
import { Repository } from "typeorm";
import { AppDataSource } from "../config/database";
import { Ad } from "./ad.entity";
import { IAdRepository } from "./interfaces/ad.repository.interface";

@injectable()
export class AdRepository implements IAdRepository {
  private repository: Repository<Ad>;

  constructor() {
    this.repository = AppDataSource.getRepository(Ad);
  }

  async findAll(): Promise<Ad[]> {
    return this.repository.find({ relations: ["campaign"] });
  }

  async findById(id: number): Promise<Ad | null> {
    return this.repository.findOne({ where: { id }, relations: ["campaign"] });
  }

  async updateRemainingBudget(adId: number, newBudget: number): Promise<void> {
    await this.repository.update(adId, { remainingBudget: newBudget });
  }
}
