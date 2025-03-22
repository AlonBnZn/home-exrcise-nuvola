import { Ad } from "../ad.entity";

export interface IAdRepository {
  findAll(): Promise<Ad[]>;
  findById(id: string): Promise<Ad | null>;
  updateRemainingBudget(adId: string, newBudget: number): Promise<void>;
}
