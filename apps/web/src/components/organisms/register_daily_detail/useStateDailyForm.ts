import { useState } from "react";

import {
  type DailyDetailForm,
  initialDailyDetailForm,
} from "./dailyDetailForm";

export const useStateDailyForm = (params: { date: Date }) => {
  const [form, setForm] = useState<DailyDetailForm>({
    ...initialDailyDetailForm,
    date: params.date,
  });

  const resetForm = () => {
    setForm({ ...initialDailyDetailForm, date: params.date });
  };

  return { form, setForm, resetForm };
};
