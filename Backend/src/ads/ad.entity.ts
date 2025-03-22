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
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  adType!: "small" | "large";

  @Column()
  cpm!: number;

  @Column({ type: "float" })
  remainingBudget!: number;

  @ManyToOne(() => Campaign, (campaign) => campaign.ads)
  @JoinColumn({ name: "campaignId" })
  campaign!: Campaign;

  @Column("uuid")
  campaignId!: string;
}
