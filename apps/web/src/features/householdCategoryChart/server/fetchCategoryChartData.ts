import { findUser } from "@persistence/browser/server/find-user";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { PageSourceBalanceChartDocument } from "@v3/graphql/household/type";

import { cumulateSumBalance } from "./cumulateSumBalance";
import { filterSumBalance } from "./filterSumBalance";
import { sumBalanceData } from "./sumBalanceData";

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
    fromDate: new Date("2019-01-01"),
    toDate,
  });

  const sumBalance = sumBalanceData(source?.data);
  const cumulative = cumulateSumBalance(sumBalance);
  const filteredCumulative = filterSumBalance(cumulative, fromDate);

  return {
    data: filteredCumulative,
  };
};
