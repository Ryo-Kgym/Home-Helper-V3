import type { Record } from "@oneforall/domain/schema/recordSchema";
import { useNewRecordZustand } from "@hooks/states/app/record/useNewRecordZustand";

export const useInitNewRecord = () =>
  useNewRecordZustand((state) => (record: Record) => {
    state.setRecord(record);
    state.defaultRecord = record;
  });