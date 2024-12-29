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

export const initialState = {
  id: "",
  date: new Date(),
  amount: 0,
  iocomeType: IocomeType.Income,
  genreId: "",
  categoryId: "",
  accountId: "",
  memo: "",
  tags: [],
};
