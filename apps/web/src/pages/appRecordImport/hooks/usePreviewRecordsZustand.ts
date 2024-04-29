import type { PreviewRecords } from "@oneforall/domain/schema/recordSchema/previewRecordsSchema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  previewRecords: PreviewRecords;
};

type Actions = {
  setPreviewRecords: (records: PreviewRecords) => void;
  resetPreviewRecords: () => void;
};

/**
 * @package
 */
export const usePreviewRecordsZustand = create<State & Actions>()(
  immer((set) => ({
    previewRecords: {},
    setPreviewRecords: (records) => {
      set((state) => {
        state.previewRecords = records;
      });
    },
    resetPreviewRecords: () => {
      set((state) => {
        state.previewRecords = {};
      });
    },
  })),
);
