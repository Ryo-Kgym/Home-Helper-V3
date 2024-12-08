import { Check } from "~/components/ui/v4/icon/Check";
import { Exclamation } from "~/components/ui/v4/icon/Exclamation";

export const SavedMark = ({ saved }: { saved: boolean }) => (
  <div className={"text-gray-500"}>{saved ? <Check /> : <Exclamation />}</div>
);
