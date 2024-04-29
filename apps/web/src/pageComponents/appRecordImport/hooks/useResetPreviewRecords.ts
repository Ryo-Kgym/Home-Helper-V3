import { usePreviewRecordsZustand } from "./usePreviewRecordsZustand";

export const useResetPreviewRecords = () =>
  usePreviewRecordsZustand((store) => store.resetPreviewRecords);
