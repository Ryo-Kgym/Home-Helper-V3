import type { Records } from "@feature/app/schema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useRecords = () =>
  useRecordsState((store) => ({
    records: store.records,
    setRecords: store.setRecords,
  }));

export const useInitRecords = () =>
  useRecordsState((store) => (records: Records) => store.setRecords(records));

type State = {
  records: Records;
};

type Actions = {
  setRecords: (records: Records) => void;
};

const useRecordsState = create<State & Actions>()(
  immer((set) => ({
    records: {},
    setRecords: (records) => set({ records }),
  })),
);
