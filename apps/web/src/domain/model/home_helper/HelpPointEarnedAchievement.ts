import { HelpItem } from "@domain/model/home_helper/HelpItem";

export type HelpPointEarnedAchievement = {
  id: string;
  userId: string;
  earnedDate: string;
  earnedPoint: number;
  helpPointEarnedDetailByEarnedAchievementId: HelpPointEarnedDetail[];
};

export type HelpPointEarnedDetail = {
  helpItemByEarnedDetail: HelpItem;
  helpItemCount: number;
  helpItemTotalPoint: number;
};
