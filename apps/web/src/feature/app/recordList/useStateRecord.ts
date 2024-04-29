import type { Records } from "@oneforall/domain/schema/recordSchema";
import { useState } from "react";

export const useStateRecord = (defaultRecord: Records[number]) => {
  const [record, setRecord] = useState<Records[number]>(defaultRecord);

  return { record, setRecord };
};
