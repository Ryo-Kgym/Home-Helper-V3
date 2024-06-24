import { SummaryCriteria } from "@oneforall/domain/schema/summary/sumRecordsSchema";
import { createDataArray } from "@pageComponents/showChart/components/createDataArray";
import ShowChartClient from "@pageComponents/showChart/components/ShowChartClient";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { parseToRecords } from "@v3/graphql/public/convert/parseToRecords";
import { GetAppDocument } from "@v3/graphql/public/type";

export const ShowChartServer = async ({ appId }: { appId: string }) => {
  // レコードデータの呼び出しは RecordListServer を参照
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const records = parseToRecords(data?.app?.records ?? []);

  // 条件はこれを使用する
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

  // 上記を組み合わせて、data を生成する
  const dataArray = createDataArray({ records, criteria });

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return <ShowChartClient data={dataArray} colors={colors} />;
};
