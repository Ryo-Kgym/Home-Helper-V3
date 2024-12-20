import { IocomeType } from "../../../domain/model/household/IocomeType";

export type DailyDetailForm = {
  date: Date;
  genreId: string;
  iocomeType: IocomeType;
  categoryId: string;
  accountId: string;
  amount: number | "";
  memo: string;
};