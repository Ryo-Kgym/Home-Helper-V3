import { Records } from "@oneforall/domain/schema/recordSchema";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  records: Records;
};

type Actions = {
  setRecords: (records: Records) => void;
};

/**
 * @package
 */
export const useRecordsZustand = create<State & Actions>()(
  immer((set) => ({
    records: {},
    setRecords: (records) => set({ records }),
  })),
);
