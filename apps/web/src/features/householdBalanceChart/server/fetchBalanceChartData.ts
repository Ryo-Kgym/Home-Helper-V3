import { cumulateSumBalance } from "@features/householdBalanceChart/server/cumulateSumBalance";
import { filterSumBalance } from "@features/householdBalanceChart/server/filterSumBalance";
import { sumBalanceData } from "@features/householdBalanceChart/server/sumBalanceData";
import { findUser } from "@persistence/browser/server/find-user";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { ChartDataDocument } from "@v3/graphql/household/type";

export const fetchBalanceChartData = async ({
  fromDate,
  toDate,
}: {
  fromDate: Date;
  toDate: Date;
}) => {
  const { group } = await findUser();

  const source = await fetchQuery(ChartDataDocument, {
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
