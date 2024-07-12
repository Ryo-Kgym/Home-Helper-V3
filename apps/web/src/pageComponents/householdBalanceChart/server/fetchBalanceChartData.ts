import { findUser } from "@persistence/browser/server/find-user";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { sumBalanceData } from "@v3/graphql/household/convert/sumBalanceData";
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

  return {
    data: sumBalanceData(source.data),
  };
};
