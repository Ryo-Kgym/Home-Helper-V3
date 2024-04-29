import { usePreviewRecordsZustand } from "./usePreviewRecordsZustand";

export const usePreviewRecords = () =>
  usePreviewRecordsZustand((store) => store.previewRecords);
