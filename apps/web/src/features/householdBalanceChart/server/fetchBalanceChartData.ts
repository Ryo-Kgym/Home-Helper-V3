import { ChartDataDocument } from "@v3/graphql/household/schema/query/v5/chartData.generated";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { cumulateSumBalance } from "./cumulateSumBalance";
import { filterSumBalance } from "./filterSumBalance";
import { sumBalanceData } from "./sumBalanceData";

export const fetchBalanceChartData = async ({
  fromDate,
  toDate,
}: {
  fromDate: Date;
  toDate: Date;
}) => {
  const { group } = await findUser();

  const source = await execQuery(ChartDataDocument, {
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
