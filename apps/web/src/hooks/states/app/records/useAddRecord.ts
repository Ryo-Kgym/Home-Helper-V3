import { useRecordsZustand } from "@hooks/states/app/records/useRecordsZustand";
import { Record } from "@oneforall/domain/schema/recordSchema";

export const useAddRecord = () =>
  useRecordsZustand(
    (store) => (index: number, record: Record) =>
      store.setRecords({
        ...store.records,
        [index]: record,
      }),
  );
