import { cache } from "react";
import {
  CustomerOverview,
  InvoiceSummary,
  MembershipProgress
} from "@/types/customer";

const invoices: InvoiceSummary[] = [
  { name: "INV-24001", date: "12 Feb", amount: 120 },
  { name: "INV-24002", date: "18 Feb", amount: 300 },
  { name: "INV-24003", date: "23 Feb", amount: 180 },
  { name: "INV-24004", date: "02 Mar", amount: 250 },
  { name: "INV-24005", date: "11 Mar", amount: 95 },
  { name: "INV-24006", date: "14 Mar", amount: 220 }
];

const overview: CustomerOverview = {
  customer: "Ali Hassan",
  tier: "VIP",
  stars: 3,
  totalSales: 1550,
  currentDiscount: 2,
  remainingToNextStar: 450,
  membershipId: "WS-0148-2026",
  nextTierName: "VVIP",
  teaserMessage: "Unlock VVIP membership to access even greater rewards.",
  nextUnlock: [
    { star: 4, discount: 2.5 },
    { star: 5, discount: 3 }
  ],
  invoices,
  progressCurrent: 50,
  progressTarget: 500,
  benefits: [
    { star: 1, salesRequired: 500, discount: 1 },
    { star: 2, salesRequired: 1000, discount: 1.5 },
    { star: 3, salesRequired: 1500, discount: 2 },
    { star: 4, salesRequired: 2000, discount: 2.5 },
    { star: 5, salesRequired: 2500, discount: 3 }
  ]
};

const membershipProgress: MembershipProgress = {
  currentTier: overview.tier,
  currentStars: overview.stars,
  totalSales: overview.totalSales,
  currentDiscount: overview.currentDiscount,
  remainingToNextStar: overview.remainingToNextStar,
  progressCurrent: overview.progressCurrent,
  progressTarget: overview.progressTarget,
  visibleBenefits: overview.benefits,
  nextUnlock: overview.nextUnlock,
  nextTierName: overview.nextTierName,
  teaserMessage: overview.teaserMessage,
  tiers: [
    {
      name: "VIP",
      unlocked: true,
      stars: 3,
      totalStars: 5,
      threshold: 2500,
      teaser: ""
    },
    {
      name: "VVIP",
      unlocked: false,
      stars: 0,
      totalStars: 5,
      threshold: 5000,
      teaser: "Unlock VVIP membership to reveal its exclusive discounts and elevated benefits."
    },
    {
      name: "VVVIP",
      unlocked: false,
      stars: 0,
      totalStars: 5,
      threshold: 9000,
      teaser: "VVVIP is reserved for the highest spend tier and becomes visible only once unlocked."
    }
  ]
};

const withDelay = async <T,>(payload: T) => {
  await new Promise((resolve) => setTimeout(resolve, 160));
  return payload;
};

export const getCustomerOverview = cache(async (): Promise<CustomerOverview> => withDelay(overview));

export const getPointsHistory = cache(async (): Promise<InvoiceSummary[]> => withDelay(invoices.slice(0, 10)));

export const getMembershipProgress = cache(async (): Promise<MembershipProgress> => withDelay(membershipProgress));

