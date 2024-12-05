import { useEffect, useState } from "react";
import { fetchDashboardMonthly } from "@features/householdDashboard/server/fetchDashboardMonthly";
import { LoadingData } from "@global/type/loadingData";

type DataType = Awaited<ReturnType<typeof fetchDashboardMonthly>>;

export const useDashboardMonthly = ({
  dashboardSettingId,
}: {
  dashboardSettingId: string;
}): LoadingData<DataType> => {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    void (async () => {
      setData(await fetchDashboardMonthly({ dashboardSettingId }));
    })();
  }, [dashboardSettingId]);

  if (!data) {
    return {
      loading: true,
      data: undefined,
    };
  }

  return {
    loading: false,
    data,
  };
};
