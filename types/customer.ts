export type NextUnlock = {
  star: number;
  discount: number;
};

export type BenefitUnlock = {
  star: number;
  salesRequired: number;
  discount: number;
};

export type InvoiceSummary = {
  name: string;
  date: string;
  amount: number;
};

export type CustomerOverview = {
  customer: string;
  tier: string;
  stars: number;
  totalSales: number;
  currentDiscount: number;
  remainingToNextStar: number;
  membershipId: string;
  nextTierName: string;
  teaserMessage: string;
  nextUnlock: NextUnlock[];
  invoices: InvoiceSummary[];
  progressCurrent: number;
  progressTarget: number;
  benefits: BenefitUnlock[];
};

export type MembershipTierSummary = {
  name: string;
  unlocked: boolean;
  stars: number;
  totalStars: number;
  threshold: number;
  teaser: string;
};

export type MembershipProgress = {
  currentTier: string;
  currentStars: number;
  totalSales: number;
  currentDiscount: number;
  remainingToNextStar: number;
  progressCurrent: number;
  progressTarget: number;
  visibleBenefits: BenefitUnlock[];
  nextUnlock: NextUnlock[];
  nextTierName: string;
  teaserMessage: string;
  tiers: MembershipTierSummary[];
};

