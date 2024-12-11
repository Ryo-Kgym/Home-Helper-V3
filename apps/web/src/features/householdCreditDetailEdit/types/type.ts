import { IocomeType } from "../../../domain/model/household/IocomeType";

export type CreditDetailEditFormState = {
  genreId: string | null;
  categoryId: string | null;
  memo: string;
  isExpense: boolean;
};
export type CreditDetailEditDisplayState = {
  id: string;
  date: Date;
  iocomeType: IocomeType;
  amount: number;
};
