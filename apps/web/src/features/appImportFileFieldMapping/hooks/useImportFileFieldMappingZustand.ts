import { ImportFileFieldMapping } from "@oneforall/domain/schema/importFileFieldMappingSchema";
import create from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  importFileFieldMapping: ImportFileFieldMapping;
};
type Actions = {
  setImportFileFieldMapping: (fieldMapping: ImportFileFieldMapping) => void;
  setFieldIndex: (fieldId: string, fileColumnIndex: number | null) => void;
};

/**
 * @package
 */
export const useImportFileFieldMappingZustand = create<State & Actions>()(
  immer((set) => ({
    importFileFieldMapping: {},
    setImportFileFieldMapping: (fieldMapping) =>
      set((state) => {
        state.importFileFieldMapping = fieldMapping;
      }),
    setFieldIndex: (fieldId, fileColumnIndex) =>
      set((state) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.importFileFieldMapping[fieldId].fileColumnIndex = fileColumnIndex;
      }),
  })),
);
