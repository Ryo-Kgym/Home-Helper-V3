import type { IocomeType } from "../../../domain/model/household/IocomeType";

export type DailyBalanceRow = {
  type: "daily" | "credit";
  id: string;
  date: string;
  iocomeType: IocomeType;
  genre: string;
  category: string;
  amount: number;
  memo: string;
  tags: { id: string; label: string; colorCode: string }[];
};
