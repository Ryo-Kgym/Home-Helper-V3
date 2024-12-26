import { FC } from "react";

import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
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
  const { records } = await fetchDetails({
    fromDate,
    toDate,
    tagIds,
  });

  return <SearchListTable records={records} />;
};
