import { Ad } from "../ad.entity";

export interface IAdRepository {
  findAll(): Promise<Ad[]>;
  findById(id: number): Promise<Ad | null>;
  updateRemainingBudget(adId: number, newBudget: number): Promise<void>;
}
