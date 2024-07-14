import { cumulateSumBalance } from "@features/householdBalanceChart/server/cumulateSumBalance";
import { sumBalanceData } from "@features/householdBalanceChart/server/sumBalanceData";
import { findUser } from "@persistence/browser/server/find-user";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { PageSourceBalanceChartDocument } from "@v3/graphql/household/type";

export const fetchBalanceChartData = async ({
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

  const data = sumBalanceData(source?.data);

  const cumulative = cumulateSumBalance(data);

  return {
    data: cumulative,
  };
};
