import { useRecordsZustand } from "@hooks/states/app/records/useRecordsZustand";
import { Records } from "@oneforall/domain/schema/recordSchema";

export const useInitRecords = () =>
  useRecordsZustand((store) => (records: Records) => store.setRecords(records));
