import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";

export type HelpPointExchangedAchievement = {
  userId: string;
  exchangeItemById: ExchangeItem;
  exchangeCount: number;
  exchangeTotalPoint: number;
  exchangedDatetime: string;
};
