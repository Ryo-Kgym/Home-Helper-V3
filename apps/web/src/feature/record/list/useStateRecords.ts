import type { Records } from "@feature/app/schema";
import { useState } from "react";

export const useStateRecords = (initState: Records) => {
  const [records, setRecordsBase] = useState<Records>(
    structuredClone(initState),
  );

  const setRecords = (records: Records) =>
    setRecordsBase(structuredClone(records));

  return { records, setRecords };
};
