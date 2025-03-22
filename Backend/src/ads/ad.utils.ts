import { Ad } from "./ad.entity";
import { Campaign } from "../campaigns/campaign.entity";

export function generateRandomCycle(): string[] {
  const types = ["S", "XL"];
  return Array.from(
    { length: 3 },
    () => types[Math.floor(Math.random() * types.length)]
  );
}

export function calculateBidCap(ad: Ad, campaigns: Campaign[]): number {
  const campaign = campaigns.find((c) => c.id === ad.campaignId);
  if (!campaign) return 0;
  return (campaign.campaignBudget * 1000) / campaign.campaignImpressionsGoal;
}

export function calculateAdScore(ad: Ad, campaigns: Campaign[]): number {
  const bidCap = calculateBidCap(ad, campaigns);
  return bidCap * (ad.remainingBudget / ad.cpm);
}
