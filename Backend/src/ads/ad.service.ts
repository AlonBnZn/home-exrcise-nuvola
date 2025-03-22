import { IAdService } from "./interfaces/ad.service.interface";
import { IAdRepository } from "./interfaces/ad.repository.interface";
import { ICampaignRepository } from "./../campaigns/interfaces/campaign.repository.interface";
import { TOKENS } from "./../config/tokens";
import { inject, injectable } from "inversify";
import { generateRandomCycle, calculateAdScore } from "./ad.utils";

@injectable()
export class AdService implements IAdService {
  constructor(
    @inject(TOKENS.IAdRepository) private adRepository: IAdRepository,
    @inject(TOKENS.ICampaignRepository)
    private campaignRepository: ICampaignRepository
  ) {}

  public async runAdSelectionCycle() {
    const ads = await this.adRepository.findAll();
    const campaigns = await this.campaignRepository.findAll();

    const cycle = generateRandomCycle();
    const chosenAds: any[] = [];

    for (const stage of cycle) {
      if (stage === "S") {
        const smallAds = ads
          .filter((ad) => ad.adType === "small" && ad.remainingBudget >= ad.cpm)
          .sort(
            (a, b) =>
              calculateAdScore(b, campaigns) - calculateAdScore(a, campaigns)
          )
          .slice(0, 3);

        if (smallAds.length === 3) {
          for (const ad of smallAds) {
            const newBudget = ad.remainingBudget - ad.cpm;
            await this.adRepository.updateRemainingBudget(ad.id, newBudget);
            ad.remainingBudget = newBudget;
          }
          chosenAds.push({ stage: "S", ads: smallAds });
        } else {
          chosenAds.push({ stage: "S", ads: [] });
        }
      } else if (stage === "XL") {
        const largeAd = ads
          .filter((ad) => ad.adType === "large" && ad.remainingBudget >= ad.cpm)
          .sort(
            (a, b) =>
              calculateAdScore(b, campaigns) - calculateAdScore(a, campaigns)
          )[0];

        if (largeAd) {
          const newBudget = largeAd.remainingBudget - largeAd.cpm;
          await this.adRepository.updateRemainingBudget(largeAd.id, newBudget);
          largeAd.remainingBudget = newBudget;
          chosenAds.push({ stage: "XL", ads: [largeAd] });
        } else {
          chosenAds.push({ stage: "XL", ads: [] });
        }
      }
    }

    return { cycle, chosenAds };
  }
}
