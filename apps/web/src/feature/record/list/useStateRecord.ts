import { useState } from "react";

import type { Records } from "@/feature/app/schema";

export const useStateRecord = (defaultRecord: Records[number]) => {
  const [record, setRecord] = useState<Records[number]>(defaultRecord);

  return { record, setRecord };
};
