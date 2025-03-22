export interface IAdService {
  runAdSelectionCycle(): Promise<{ cycle: string[]; chosenAds: any[] }>;
}
