import { useRecordsZustand } from "@hooks/states/app/records/useRecordsZustand";

export const useRecords = () =>
  useRecordsZustand((store) => ({
    records: store.records,
    setRecords: store.setRecords,
  }));
