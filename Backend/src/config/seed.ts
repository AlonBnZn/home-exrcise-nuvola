import { AppDataSource } from "../config/database";
import { Campaign } from "../campaigns/campaign.entity";
import { Ad } from "../ads/ad.entity";

export async function seedDatabase() {
  const campaignRepo = AppDataSource.getRepository(Campaign);
  const adRepo = AppDataSource.getRepository(Ad);

  const campaigns = await campaignRepo.save([
    { campaignBudget: 1000, campaignImpressionsGoal: 200000 },
    { campaignBudget: 800, campaignImpressionsGoal: 150000 },
    { campaignBudget: 500, campaignImpressionsGoal: 100000 },
  ]);

  const ads: Ad[] = [];

  campaigns.forEach((campaign, i) => {
    ads.push({
      adType: "large",
      cpm: 10 + i * 2,
      remainingBudget: 300,
      campaignId: campaign.id,
    } as Ad);
  });

  campaigns.forEach((campaign, i) => {
    for (let j = 1; j <= 3; j++) {
      ads.push({
        adType: "small",
        cpm: 3 + j,
        remainingBudget: 100 + j * 20,
        campaignId: campaign.id,
      } as Ad);
    }
  });

  await adRepo.save(ads);

  console.log("Database seeded with 3 campaigns, 9 small ads, and 3 XL ads");
  await AppDataSource.destroy();
}
