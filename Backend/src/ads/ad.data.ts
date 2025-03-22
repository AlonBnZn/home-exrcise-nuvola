import { AdFormat, AdStatus } from "./ad.entity";

export const data = [
  {
    title: "Summer Clearance",
    description: "Up to 50% off!",
    image:
      "https://cdn.shopify.com/s/files/1/0190/5874/files/Summer_Clearance_Sale_small_6911fdab-eb6c-4d4e-8460-848d9e10902b.jpg?v=1627322470",
    landing_page: "https://example.com/summer",
    format: AdFormat.S,
    bid_cap: 1.5,
    daily_budget: 200,
    status: AdStatus.ACTIVE,
  },
  {
    title: "New App Launch",
    description: "Join millions of users!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbkXRafBwqs1l8hhwKNheH8HAqLtuqN5i0A&s",
    landing_page: "https://example.com/app",
    format: AdFormat.XL,
    bid_cap: 2.5,
    daily_budget: 300,
    status: AdStatus.ACTIVE,
  },
  {
    title: "Weekend Deals",
    description: "Special weekend discounts.",
    image:
      "https://t3.ftcdn.net/jpg/07/81/23/70/360_F_781237005_BneGfAWx7W2YbGGVF5NEjY3cH8MYBGSE.jpg",
    landing_page: "https://example.com/weekend",
    format: AdFormat.S,
    bid_cap: 1.2,
    daily_budget: 150,
    status: AdStatus.PAUSED,
  },
  {
    title: "Free Shipping",
    description: "Free shipping over $50.",
    image:
      "https://img.freepik.com/premium-vector/free-delivery-shipping-icon-courier-service-label_8071-37343.jpg?semt=ais_hybrid",
    landing_page: "https://example.com/freeshipping",
    format: AdFormat.S,
    bid_cap: 1.8,
    daily_budget: 180,
    status: AdStatus.ACTIVE,
  },
  {
    title: "Limited Time Offer",
    description: "Hurry up — offer ends soon!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS236ZdAiHWXQxUuaAOL--JMIqtow-QZBWjkA&s",
    landing_page: "https://example.com/offer",
    format: AdFormat.XL,
    bid_cap: 3.0,
    daily_budget: 350,
    status: AdStatus.ACTIVE,
  },
];
