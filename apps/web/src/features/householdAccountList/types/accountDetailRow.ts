import type { IocomeType } from "../../../domain/model/household/IocomeType";

export type AccountDetailRow = {
  type: "daily" | "credit";
  id: string;
  date: Date;
  iocomeType: IocomeType;
  genre: string;
  category: string;
  amount: number;
  memo: string;
  tags: { id: string; label: string; colorCode: string }[];
};
