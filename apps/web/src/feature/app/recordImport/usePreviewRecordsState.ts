import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { PreviewRecords } from "@oneforall/domain/schema/preview-records-schema";

export const usePreviewRecords = () =>
  usePreviewRecordsState((store) => store.previewRecords);

export const useSetPreviewRecords = () =>
  usePreviewRecordsState((store) => store.setPreviewRecords);

export const useResetPreviewRecords = () =>
  usePreviewRecordsState((store) => store.resetPreviewRecords);

type State = {
  previewRecords: PreviewRecords;
};

type Actions = {
  setPreviewRecords: (records: PreviewRecords) => void;
  resetPreviewRecords: () => void;
};

const usePreviewRecordsState = create<State & Actions>()(
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
