import { ChartDataDocument } from "@v3/graphql/household/schema/query/v5/chartData.generated";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { convertToCategoryChartData } from "./convertToCategoryChartData";

export const fetchCategoryChartData = async ({
  fromDate,
  toDate,
}: {
  fromDate: Date;
  toDate: Date;
}) => {
  const { group } = await findUser();

  const source = await execQuery(ChartDataDocument, {
    groupId: group.id,
    fromDate,
    toDate,
  });

  const categoryChartData = convertToCategoryChartData(source?.data);

  return {
    data: categoryChartData,
  };
};
