"use server";

type Results = {
  cash: number;
  investment: number;
  total: number;
  currentDatetime: Date;
};

export const fetchDashboardTotal = async ({
  favoriteFilterId,
}: {
  favoriteFilterId: string;
}): Promise<Results> => {
  favoriteFilterId;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    cash: 100000,
    investment: 1000000,
    total: 1100000,
    currentDatetime: new Date("2024-01-01T00:00:00Z"),
  };
};
