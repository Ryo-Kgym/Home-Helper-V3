import type { IocomeType } from "~/types/iocome-type";

export type Daily = {
  id: string;
  date: Date | undefined;
  genre: { id: string; name: string; iocomeType: IocomeType };
  category: { id: string; name: string };
  account: { id: string; name: string };
  amount: number;
  memo: string | null;
};
