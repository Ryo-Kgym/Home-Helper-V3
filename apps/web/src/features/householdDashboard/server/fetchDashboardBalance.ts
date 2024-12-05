"use server";

type Results = {
  income: Nominal;
  outcome: Nominal;
};

type Nominal = {
  total: number;
  details: {
    id: string;
    name: string;
    amount: number;
  }[];
};

export const fetchDashboardBalance = async ({
  favoriteFilterId,
}: {
  favoriteFilterId: string;
}): Promise<Results> => {
  favoriteFilterId;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    income: {
      total: 1000000,
      details: [
        { id: "1", name: "給与", amount: 1000000 },
        { id: "2", name: "副業", amount: 0 },
        { id: "3", name: "売電", amount: 0 },
        { id: "4", name: "その他", amount: 0 },
      ],
    },
    outcome: {
      total: 900000,
      details: [
        { id: "1", name: "食費", amount: 50000 },
        { id: "2", name: "住居費", amount: 80000 },
        { id: "3", name: "光熱費", amount: 20000 },
        { id: "4", name: "交通費", amount: 5000 },
        { id: "5", name: "通信費", amount: 3000 },
        { id: "6", name: "保険料", amount: 10000 },
      ],
    },
  };
};
