import { useImportFileFieldMappingZustand } from "./useImportFileFieldMappingZustand";

export const useSetFieldIndex = () =>
  useImportFileFieldMappingZustand((store) => store.setFieldIndex);
