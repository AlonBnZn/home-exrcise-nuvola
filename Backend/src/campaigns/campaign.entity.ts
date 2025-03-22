import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ad } from "../ads/ad.entity";

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  campaignBudget!: number;

  @Column()
  campaignImpressionsGoal!: number;

  @OneToMany(() => Ad, (ad) => ad.campaign)
  ads!: Ad[];
}
