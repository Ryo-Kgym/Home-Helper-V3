import { usePreviewRecordsZustand } from "@pages/appRecordImport/hooks/usePreviewRecordsZustand";

export const useSetPreviewRecords = () =>
  usePreviewRecordsZustand((store) => store.setPreviewRecords);
