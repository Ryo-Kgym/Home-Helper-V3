import { FC } from "react";

import { fetchDetails } from "../server/fetchDetails";
import { SearchListTable } from "./SearchListTable";

export const SearchListServer: FC = async () => {
  const { records } = await fetchDetails();

  return <SearchListTable records={records} />;
};
