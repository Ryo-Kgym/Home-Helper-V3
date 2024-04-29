import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { ViewRecords } from "../../../../../../packages/domain/schema/view/viewRecordSchema";

export const useViewRecords = () =>
  useViewRecordsState((store) => ({
    viewRecords: store.viewRecords,
    setViewRecords: store.setViewRecords,
  }));

export const useInitViewRecords = () =>
  useViewRecordsState(
    (store) => (viewRecords: ViewRecords) => store.setViewRecords(viewRecords),
  );

type State = {
  viewRecords: ViewRecords;
};

type Actions = {
  setViewRecords: (records: ViewRecords) => void;
};

const useViewRecordsState = create<State & Actions>()(
  immer((set) => ({
    viewRecords: {},
    setViewRecords: (viewRecords) => set({ viewRecords }),
  })),
);
