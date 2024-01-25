import type { IocomeType } from "~/types/iocome-type";

export type CreditCardSummary = {
  id: string;
  withdrawalDate: Date | undefined;
  genre: { name: string; iocomeType: IocomeType };
  category: { name: string };
  account: { id: string; name: string };
  total: number;
};

export type CreditCardDetail = {
  id: string;
  date: Date;
  genre: { name: string; iocomeType: IocomeType };
  category: { name: string };
  account: { id: string; name: string };
  amount: number;
  memo: string | null;
};
