import { IocomeType } from "./IocomeType";

export type DailyDetail = {
  id: string;
  date: Date;
  amount: number;
  iocomeType: IocomeType;
  genreId: string;
  categoryId: string;
  accountId: string;
  memo: string;
  tags: string[];
};
