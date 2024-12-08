import { IocomeType } from "../../domain/model/household/IocomeType";

export type LoadFileProps = {
  date: Date;
  memo: string;
  amount: number;
  iocomeType: IocomeType;
  genreId: string;
  categoryId: string;
};
