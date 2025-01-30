import { YYYY_MM_DD } from "@/type/date/date";

import { IocomeType } from "../../domain/model/household/IocomeType";

export type LoadFileProps = {
  date: YYYY_MM_DD;
  memo: string;
  amount: number;
  iocomeType: IocomeType;
  genreId: string;
  categoryId: string;
};
