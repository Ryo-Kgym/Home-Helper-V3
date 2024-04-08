import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { Record, Records } from "@feature/app/schema";

export const useRecords = () =>
  useRecordsState((store) => ({
    records: store.records,
    setRecords: store.setRecords,
  }));

export const useInitRecords = () =>
  useRecordsState((store) => (records: Records) => store.setRecords(records));

export const useAddRecord = () =>
  useRecordsState(
    (store) => (index: number, record: Record) =>
      store.setRecords({
        ...store.records,
        [index]: record,
      }),
  );

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
