import { FC } from "react";

import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { fetchDetails } from "../server/fetchDetails";
import { SearchListTable } from "./SearchListTable";

type Props = {
  fromDate: YYYY_MM_DD;
  toDate: YYYY_MM_DD;
};

export const SearchListServer: FC<Props> = async ({ fromDate, toDate }) => {
  const { records } = await fetchDetails({
    fromDate,
    toDate,
  });

  return <SearchListTable records={records} />;
};
