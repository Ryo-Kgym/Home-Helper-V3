import { Records } from "../../schema/recordSchema";
import { SummaryCriteria } from "../../schema/summary/sumRecordsSchema";

export const sumRecords = (records: Records, criteria: SummaryCriteria) => {
  if (
    Object.keys(criteria.groupingFields).length < 1 ||
    Object.keys(criteria.summaryFields).length < 1
  ) {
    throw new Error("groupingFields is empty");
  }

  const groupingFieldId = Object.values(criteria.groupingFields)[0]!.id;
  const sumFieldId = Object.values(criteria.summaryFields)[0]!.id;

  const list = Object.values(records).map(
    (r) => r.columns[groupingFieldId]?.value,
  );

  const uniqueGroupingValues = [...new Set(list)];

  const result = uniqueGroupingValues
    .map((groupingValue) => ({
      groupingFieldId,
      groupingValue,
      sumFieldId,
    }))
    .flatMap((field) => {
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
