import { useState } from "react";

import { SummaryFormState } from "../types/summaryProps";

export const useStateCreditSummary = ({ init }: { init: SummaryFormState }) => {
  const [form, setForm] = useState<SummaryFormState>({
    creditCard: init.creditCard,
    withdrawalDate: init.withdrawalDate,
    accountId: init.accountId,
  });

  return { form, setForm };
};
