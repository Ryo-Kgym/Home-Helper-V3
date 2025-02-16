import type { IocomeType } from "../../../domain/model/household/IocomeType";

export type ChartDetailTableRow = {
  id: string;
  type: string;
  withdrawalDate: string;
  settlementDate: string;
  amount: number;
  iocomeType: IocomeType;
  accountId: string;
  accountName: string;
  genreId: string;
  genreName: string;
  categoryId: string;
  categoryName: string;
  memo: string;
  tags: { label: string; value: string; colorCode: string }[];
  isDeposit: boolean;
};
