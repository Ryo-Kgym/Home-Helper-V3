import { Record } from "@oneforall/domain/schema/recordSchema";

import { useRecordsZustand } from "~/hooks/states/app/records/useRecordsZustand";

export const useAddRecord = () =>
  useRecordsZustand(
    (store) => (index: number, record: Record) =>
      store.setRecords({
        ...store.records,
        [index]: record,
      }),
  );
