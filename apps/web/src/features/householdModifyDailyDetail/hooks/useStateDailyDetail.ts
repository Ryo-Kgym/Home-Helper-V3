import { useEffect, useState } from "react";

import { DailyDetail } from "../../../domain/model/household/DailyDetail";
import { getDailyDetail } from "../useServer/getDailyDetail";

export const useStateDailyDetail = (params: { id: string }) => {
  const [form, setForm] = useState<DailyDetail>();
  const [initState, setInitSate] = useState<DailyDetail>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    void (async () => {
      const daily = await getDailyDetail(params);
      setForm(daily);
      setInitSate(daily);
    })();
  }, []);

  const resetForm = () => {
    setForm(initState);
  };

  const loading = !form || !initState;

  if (loading)
    return {
      loading,
      form: undefined,
      setForm,
      initState: undefined,
      resetForm,
    };

  return { loading, form, setForm, initState, resetForm };
};
