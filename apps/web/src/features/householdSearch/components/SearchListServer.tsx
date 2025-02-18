import { YYYYmmDD } from "@/type/date/date";
import type { FC } from "react";

import { IocomeTotal } from "../../../components/molecules/Total";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { findAccountIds } from "../../../persistence/browser/server/findAccountIds";
import { findCategoryIds } from "../../../persistence/browser/server/findCategoryIds";
import type { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { fetchDetails } from "../server/fetchDetails";
import { SearchListTable } from "./SearchListTable";

type Props = {
  fromDate: YYYY_MM_DD;
  toDate: YYYY_MM_DD;
  tagIds: string[];
};

export const SearchListServer: FC<Props> = async ({
  fromDate,
  toDate,
  tagIds,
}) => {
  const categoryIds = await findCategoryIds();
  const accountIds = await findAccountIds();

  const { records } = await fetchDetails({
    fromDate: new YYYYmmDD(fromDate),
    toDate: new YYYYmmDD(toDate),
    tagIds,
    accountIds,
    categoryIds,
  });

  const { income, outcome } = {
    income:
      records
        .filter((d) => d.genre.iocomeType === IocomeType.Income)
        .reduce((acc, cur) => acc + cur.amount, 0) ?? 0,
    outcome:
      records
        .filter((d) => d.genre.iocomeType === IocomeType.Outcome)
        .reduce((acc, cur) => acc + cur.amount, 0) ?? 0,
  };

  return (
    <>
      <SearchListTable records={records} />
      <IocomeTotal income={income} outcome={outcome} />
    </>
  );
};
