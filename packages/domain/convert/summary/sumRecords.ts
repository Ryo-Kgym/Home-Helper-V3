import { Records } from "../../schema/recordSchema";
import {
  SummaryCriteria,
  SumRecords,
} from "../../schema/summary/sumRecordsSchema";

export const sumRecords = (records: Records, criteria: SummaryCriteria) => {
  const result = [
    {
      groupingFieldId: "c1",
      groupingValue: "grouping1",
      sumFieldId: "c2",
    },
    {
      groupingFieldId: "c1",
      groupingValue: "grouping2",
      sumFieldId: "c2",
    },
  ].flatMap((field) => {
    const motherRecords = Object.values(records).filter(
      (record) =>
        record.columns[field.groupingFieldId]?.value === field.groupingValue,
    );

    const sum = motherRecords.reduce((acc, record) => {
      return acc + Number(record.columns[field.sumFieldId]?.value);
    }, 0);

    return [
      {
        sum,
        count: motherRecords.length,
        average: sum / motherRecords.length,
      },
    ];
  });

  return Object.fromEntries(result.map((res, index) => [index, res]));
};
