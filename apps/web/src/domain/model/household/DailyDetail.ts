import { IocomeType } from "./IocomeType";

export type DailyDetail = {
  id: string | null;
  date: Date | null;
  amount: number | "";
  iocomeType: IocomeType | null;
  genreId: string | null;
  categoryId: string | null;
  accountId: string | null;
  memo: string | null;
};
