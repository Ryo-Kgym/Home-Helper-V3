import type { Records } from "@feature/app/schema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const usePreviewRecords = () =>
  usePreviewRecordsState((store) => ({
    previewRecords: store.previewRecords,
    setPreviewRecords: store.setPreviewRecords,
  }));

type State = {
  previewRecords: Records;
};

type Actions = {
  setPreviewRecords: (records: Records) => void;
};

const usePreviewRecordsState = create<State & Actions>()(
  immer((set) => ({
    previewRecords: {},
    setPreviewRecords: (records) => {
      set((state) => {
        state.previewRecords = records;
      });
    },
  })),
);
