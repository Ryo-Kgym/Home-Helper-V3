import { usePreviewRecordsZustand } from "@pages/appRecordImport/hooks/usePreviewRecordsZustand";

export const useResetPreviewRecords = () =>
  usePreviewRecordsZustand((store) => store.resetPreviewRecords);
