import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

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

const columns: Record<
  ColumnName,
  { name: string; columnIndex: number | null }
> = {
  settlementDate: { name: "決済日", columnIndex: 1 },
  accountId: { name: "アカウントID", columnIndex: 2 },
  amount: { name: "金額", columnIndex: 3 },
  memo: { name: "メモ", columnIndex: 4 },
};
export type ColumnName = "settlementDate" | "accountId" | "amount" | "memo";

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
      settlementDate: 1,
      accountId: 2,
      amount: 3,
      memo: 4,
    },
    setFileImportColumnMapping: (mapping) =>
      set((state) => {
        state.fileImportColumnMapping = mapping;
      }),
  })),
);
