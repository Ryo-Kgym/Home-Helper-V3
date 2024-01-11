import { IocomeType } from "@domain/model/household/IocomeType";

export type CreditCardDetail = {
  serialNo: number | null;
  date: Date | null;
  amount: number | "";
  iocomeType: IocomeType | null;
  genreId: string | null;
  categoryId: string | null;
  memo: string | null;
};
