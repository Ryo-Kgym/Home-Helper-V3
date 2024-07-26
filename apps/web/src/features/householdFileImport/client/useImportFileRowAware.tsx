import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useImportFileRowAware = () =>
  useImportFileRowAwareState((store) => ({
    importFileRowAware: store.importFileRowAware,
    setImportFileRowAware: (row: number, attributes: Attributes) => {
      store.setImportFileRowAware({
        ...store.importFileRowAware,
        [row]: attributes,
      });
    },
  }));

export type ColumnName = "settlementDate" | "amount" | "memo";

type Attributes = {
  date: Date;
  amount: number;
  memo: string;
  genreId: string;
  categoryId: string;
};

type State = {
  importFileRowAware: Record<number, Attributes>;
};

type Actions = {
  setImportFileRowAware: (value: Record<number, Attributes>) => void;
};

const useImportFileRowAwareState = create<State & Actions>()(
  immer((set) => ({
    importFileRowAware: {},
    setImportFileRowAware: (mapping) =>
      set((state) => {
        state.importFileRowAware = mapping;
      }),
  })),
);
