import { SummaryCriteria } from "@oneforall/domain/schema/summary/sumRecordsSchema";
import ShowChartClient from "@pageComponents/showChart/components/ShowChartClient";

export const ShowChartServer = async () => {
  // レコードデータの呼び出しは RecordListServer を参照

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

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return <ShowChartClient data={data} colors={colors} />;
};
