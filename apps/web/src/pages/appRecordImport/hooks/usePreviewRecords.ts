import { usePreviewRecordsZustand } from "@pages/appRecordImport/hooks/usePreviewRecordsZustand";

export const usePreviewRecords = () =>
  usePreviewRecordsZustand((store) => store.previewRecords);
