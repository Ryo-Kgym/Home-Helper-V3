import { useNewRecordZustand } from "~/hooks/states/app/record/useNewRecordZustand";

export const useNewRecord = () =>
  useNewRecordZustand((state) => ({
    record: state.record,
    setRecord: state.setRecord,
  }));
