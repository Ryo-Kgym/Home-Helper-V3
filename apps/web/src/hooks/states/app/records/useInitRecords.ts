import { Records } from "@oneforall/domain/schema/recordSchema";

import { useRecordsZustand } from "~/hooks/states/app/records/useRecordsZustand";

export const useInitRecords = () =>
  useRecordsZustand((store) => (records: Records) => store.setRecords(records));
