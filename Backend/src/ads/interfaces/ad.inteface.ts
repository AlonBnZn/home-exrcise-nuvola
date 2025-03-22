import IAdvertiser from "../../advertiser/interfaces/IAdvertiser";
import { AdFormat, AdStatus } from "../ad.entity";

export default interface IAd {
  ad_id: string;
  advertiser: IAdvertiser;
  content: object;
  format: AdFormat;
  bid_cap: number;
  daily_budget: number;
  budget_spent: number;
  status: AdStatus;
  created_at: Date;
  updated_at: Date;
}
