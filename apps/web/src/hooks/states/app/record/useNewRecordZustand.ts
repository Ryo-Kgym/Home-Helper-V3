import type { Record } from "@oneforall/domain/schema/recordSchema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  record: Record;
  defaultRecord: Record;
};

type Actions = {
  setRecord: (record: Record) => void;
};

/**
 * @package
 */
export const useNewRecordZustand = create<State & Actions>()(
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
