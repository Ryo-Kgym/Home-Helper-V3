import { usePreviewRecordsZustand } from "./usePreviewRecordsZustand";

export const useSetPreviewRecords = () =>
  usePreviewRecordsZustand((store) => store.setPreviewRecords);
