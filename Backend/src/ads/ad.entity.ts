import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Campaign } from "../campaigns/campaign.entity";

@Entity()
export class Ad {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  adType!: "small" | "large";

  @Column()
  cpm!: number;

  @Column()
  remainingBudget!: number;

  @ManyToOne(() => Campaign, (campaign) => campaign.ads)
  @JoinColumn({ name: "campaignId" })
  campaign!: Campaign;

  @Column()
  campaignId!: number;
}
