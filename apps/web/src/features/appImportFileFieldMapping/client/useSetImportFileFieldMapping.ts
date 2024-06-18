import { useImportFileFieldMappingZustand } from "./useImportFileFieldMappingZustand";

export const useSetImportFileFieldMapping = () =>
  useImportFileFieldMappingZustand((store) => store.setImportFileFieldMapping);
