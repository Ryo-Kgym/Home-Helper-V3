import { IocomeType } from "../../../domain/model/household/IocomeType";

export type DailyDetailForm = {
  date: Date;
  genreId: string;
  iocomeType: IocomeType;
  categoryId: string;
  accountId: string;
  amount: number;
  memo: string;
};

export const initialDailyDetailForm: DailyDetailForm = {
  date: new Date(),
  genreId: "",
  iocomeType: IocomeType.Income,
  categoryId: "",
  accountId: "",
  amount: 0,
  memo: "",
};
