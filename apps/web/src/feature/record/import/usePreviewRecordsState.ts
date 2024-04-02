import type { Records } from "@feature/app/schema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const usePreviewRecords = () =>
  usePreviewRecordsState((store) => store.previewRecords);

export const useSetPreviewRecords = () =>
  usePreviewRecordsState((store) => store.setPreviewRecords);

export const useResetPreviewRecords = () =>
  usePreviewRecordsState((store) => store.resetPreviewRecords);

type State = {
  previewRecords: Records;
};

type Actions = {
  setPreviewRecords: (records: Records) => void;
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
