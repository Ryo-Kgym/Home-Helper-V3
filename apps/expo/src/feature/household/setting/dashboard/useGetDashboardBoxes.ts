import type { BoxesType } from "./type";
import { generateBox } from "./generate-box";

export const useGetDashboardBoxes = () => {
  const getDashboardBoxes = (): BoxesType => {
    return [
      {
        feature: "balance",
        argsMap: [],
      },
      {
        feature: "register",
        argsMap: [],
      },
      {
        feature: "setting",
        argsMap: [],
      },
      {
        feature: "yearly",
        argsMap: [{ type: "year", value: -2 }],
      },
      {
        feature: "yearly",
        argsMap: [{ type: "year", value: -1 }],
      },
      {
        feature: "yearly",
        argsMap: [{ type: "year", value: 0 }],
      },
      {
        feature: "monthly",
        argsMap: [{ type: "month", value: -2 }],
      },
      {
        feature: "monthly",
        argsMap: [{ type: "month", value: -1 }],
      },
      {
        feature: "monthly",
        argsMap: [{ type: "month", value: 0 }],
      },
      {
        feature: "monthlyCategory",
        argsMap: [{ type: "month", value: -1 }],
      },
      {
        feature: "monthlyCategory",
        argsMap: [{ type: "month", value: 0 }],
      },
    ];
  };

  const getBoxNodes = (): React.ReactNode[] => generateBox(getDashboardBoxes());

  return { getBoxNodes };
};
