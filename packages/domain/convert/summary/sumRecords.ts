import { Record, Records } from "../../schema/recordSchema";
import {
  SummaryCriteria,
  SumRecords,
} from "../../schema/summary/sumRecordsSchema";

export const sumRecords = (records: Records, criteria: SummaryCriteria) => {
  const groupingFieldId = Object.values(criteria.groupingFields)[0]!.id;
  const summaryFieldId = Object.values(criteria.summaryFields)[0]!.id;
  console.log(groupingFieldId);
  console.log(summaryFieldId);

  records.map((record: Record, index: number)
    =>
  {
    const groupingField = record.columns.groupingFieldId?.value;
    console.log(groupingField)
    const summaryField = record.columns.summaryFieldId?.value;
    let sum = 0;
    let count = 1;
    let i = 0;

    records.filter(i => i !== index).map((filterdRecord: Record, filterdIndex: number) => {
      if (filterdRecord.columns.groupingFieldId?.value === groupingField) {
        sum = sum + Number(filterdRecord.columns.summaryFieldId?.value) + Number(summaryField);
        count++;
      }

      if (i < records.length) {
        i = i + 1;
      }
      // ここで配列にプッシュして結果を保持？
      // recordList.push
    })
  })

  // const recordList = (records: Records) => {
  //   // const recordList = [];
  //   records?.map((record, index: number)
  // =>
  //   {
  //     const groupingField = record.columns.groupingFieldId.value;
  //     const summaryField = record.columns.summaryFieldId.value;
  //     let sum = 0;
  //     let count = 1;
  //
  //     record.filter((_, i) => i !== index).map((filterdRecord, filterdIndex: number) => {
  //       if (filterdRecord.columns.groupingFieldId.value === groupingField) {
  //         sum = Number(filterdRecord.columns.summaryFieldId.value) + Number(summaryField);
  //         count++;
  //       }
  //       // ここで配列にプッシュして結果を保持？
  //       // recordList.push
  //     })
  //   })}

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
