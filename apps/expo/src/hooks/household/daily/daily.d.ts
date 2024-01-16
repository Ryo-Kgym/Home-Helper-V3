import type { IocomeType } from "~/types/iocome-type";

export type Daily = {
  id: string;
  accountName: string;
  amount: number;
  categoryName: string;
  genreName: string;
  iocomeType: IocomeType;
  memo: string | null;
};
