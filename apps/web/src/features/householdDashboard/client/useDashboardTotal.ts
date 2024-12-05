import { useEffect, useState } from "react";
import { fetchDashboardTotal } from "@features/householdDashboard/server/fetchDashboardTotal";
import { LoadingData } from "@global/type/loadingData";

type DataType = Awaited<ReturnType<typeof fetchDashboardTotal>>;

export const useDashboardTotal = ({
  favoriteFilterId,
}: {
  favoriteFilterId: string;
}): LoadingData<DataType> => {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    void (async () => {
      setData(await fetchDashboardTotal({ favoriteFilterId }));
    })();
  }, [favoriteFilterId]);

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
