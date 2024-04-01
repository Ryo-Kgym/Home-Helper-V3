import type { Record } from "@feature/app/schema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useInitNewRecord = () =>
  useNewRecordState((state) => (record: Record) => {
    state.setRecord(record);
    state.defaultRecord = record;
  });

export const useNewRecord = () =>
  useNewRecordState((state) => ({
    record: state.record,
    setRecord: state.setRecord,
  }));

export const useResetNewRecord = () =>
  useNewRecordState((state) => () => state.setRecord(state.defaultRecord));

type State = {
  record: Record;
  defaultRecord: Record;
};

type Actions = {
  setRecord: (record: Record) => void;
};

const useNewRecordState = create<State & Actions>()(
  immer((set) => ({
    record: {
      recordId: "9",
      isEditing: true,
      columns: {},
    },
    defaultRecord: {
      recordId: "9",
      isEditing: true,
      columns: {},
    },
    setRecord: (record: Record) => {
      set((state) => {
        state.record = record;
      });
    },
  })),
);
