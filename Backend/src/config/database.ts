import { DataSource } from "typeorm";
import { Campaign } from "../campaigns/campaign.entity";
import { Ad } from "../ads/ad.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [Ad, Campaign],
  ssl: {
    rejectUnauthorized: false,
  },
});
