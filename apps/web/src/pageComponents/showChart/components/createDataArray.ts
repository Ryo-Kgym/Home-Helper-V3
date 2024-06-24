import { sumRecords } from "@oneforall/domain/convert/summary/sumRecords";
import { Records } from "@oneforall/domain/schema/recordSchema";
import { SummaryCriteria } from "@oneforall/domain/schema/summary/sumRecordsSchema";

export const createDataArray = ({
  records,
  criteria,
}: {
  records: Records;
  criteria: SummaryCriteria;
}) => {
  return Object.values(sumRecords(records, criteria)).map((record) => {
    const name: string = record.columns[0]?.value;
    const value: number = record.sum;

    return { name, value };
  });
};
