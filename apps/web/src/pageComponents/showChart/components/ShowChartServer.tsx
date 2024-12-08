import { SummaryCriteria } from "@oneforall/domain/schema/summary/sumRecordsSchema";
import { parseToRecords } from "@v3/graphql/public/convert/parseToRecords";
import { GetAppDocument } from "@v3/graphql/public/type";

import { fetchQuery } from "~/persistence/database/server/fetchQuery";
import { createDataArray } from "./createDataArray";
import ShowChartClient from "./ShowChartClient";

export const ShowChartServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const records = parseToRecords(data?.app?.records ?? []);

  const criteria: SummaryCriteria = {
    groupingFields: {
      "1718289203212": {
        id: "1718289203212",
        fieldName: "値",
        fieldKind: "text",
        fieldIndex: 1,
        options: {},
      },
    },
    summaryFields: {
      "1718289203213": {
        id: "1718289203213",
        fieldName: "数値",
        fieldKind: "numeric",
        fieldIndex: 2,
        options: {
          thousandsSeparatorPosition: 3,
        },
      },
    },
  };
  criteria;

  const dataArray = createDataArray({ records, criteria });

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return <ShowChartClient data={dataArray} colors={colors} />;
};
