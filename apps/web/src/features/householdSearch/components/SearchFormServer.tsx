import { FC } from "react";

import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { SearchFormClient } from "./SearchFormClient";

type Props = {
  fromDate: YYYY_MM_DD;
  toDate: YYYY_MM_DD;
  tagIds: string[];
};

export const SearchFormServer: FC<Props> = (props) => {
  return <SearchFormClient {...props} />;
};
