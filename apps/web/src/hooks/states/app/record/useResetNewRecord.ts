import { useNewRecordZustand } from "@hooks/states/app/record/useNewRecordZustand";

export const useResetNewRecord = () =>
  useNewRecordZustand((state) => () => state.setRecord(state.defaultRecord));