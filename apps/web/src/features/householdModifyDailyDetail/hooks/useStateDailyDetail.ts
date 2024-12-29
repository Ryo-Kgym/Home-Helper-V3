import { useEffect, useState } from "react";

import { DailyDetail } from "../../../domain/model/household/DailyDetail";
import { getDailyDetail } from "../useServer/getDailyDetail";

export const useStateDailyDetail = (params: { id: string }) => {
  const [form, setForm] = useState<DailyDetail>();
  const [initState, setInitSate] = useState<DailyDetail>();

  useEffect(
    () => {
      void (async () => {
        const daily = await getDailyDetail(params);
        setForm(daily);
        setInitSate(daily);
      })();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

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
