import { findUser } from "@persistence/browser/server/find-user";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { PageSourceBalanceChartDocument } from "@v3/graphql/household/type";

import { convertToCategoryChartData } from "./convertToCategoryChartData";

export const fetchCategoryChartData = async ({
  fromDate,
  toDate,
}: {
  fromDate: Date;
  toDate: Date;
}) => {
  const { group } = await findUser();

  const source = await fetchQuery(PageSourceBalanceChartDocument, {
    groupId: group.id,
    fromDate,
    toDate,
  });

  const categoryChartData = convertToCategoryChartData(source?.data);

  return {
    data: categoryChartData,
  };
};
