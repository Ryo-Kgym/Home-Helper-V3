import { useEffect, useState } from "react";

import { LoadingData } from "~/global/type/loadingData";
import { fetchDashboardBalance } from "../server/fetchDashboardBalance";

type DataType = Awaited<ReturnType<typeof fetchDashboardBalance>>;

export const useDashboardBalance = ({
  favoriteFilterId,
}: {
  favoriteFilterId: string;
}): LoadingData<DataType> => {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    void (async () => {
      setData(await fetchDashboardBalance({ favoriteFilterId }));
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
