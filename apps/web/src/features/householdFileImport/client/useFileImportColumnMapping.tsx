import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { ColumnName } from "../components/setting/FileImportColumnMapping";

export const useFileImportColumnMapping = () =>
  useFileImportColumnMappingState((store) => ({
    mapping: store.fileImportColumnMapping,
    setMapping: (key: ColumnName, value: number | null) => {
      store.setFileImportColumnMapping({
        ...store.fileImportColumnMapping,
        [key]: value,
      });
    },
  }));

type State = {
  fileImportColumnMapping: Record<ColumnName, number | null>;
};

type Actions = {
  setFileImportColumnMapping: (
    mapping: Record<ColumnName, number | null>,
  ) => void;
};

const useFileImportColumnMappingState = create<State & Actions>()(
  immer((set) => ({
    fileImportColumnMapping: {
      settlementDate: null,
      amount: null,
      memo: null,
    },
    setFileImportColumnMapping: (mapping) =>
      set((state) => {
        state.fileImportColumnMapping = mapping;
      }),
  })),
);
