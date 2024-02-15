import type { ArgsType, Feature } from "./type";
import { BalanceBox } from "~/feature/household/dashboard/BalanceBox";
import { CategoryRankingBox } from "~/feature/household/dashboard/CategoryRankingBox";
import { MonthlyBox } from "~/feature/household/dashboard/MonthlyBox";
import { RegisterBox } from "~/feature/household/dashboard/RegisterBox";
import { ReloadBox } from "~/feature/household/dashboard/ReloadBox";
import { SettingBox } from "~/feature/household/dashboard/SettingBox";
import { YearlyBox } from "~/feature/household/dashboard/YearlyBox";

export const featureSetting: {
  [key in Feature]: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.FC<any>;
    argsTypes: ArgsType[];
  };
} = {
  register: {
    component: RegisterBox,
    argsTypes: [],
  },
  balance: { component: BalanceBox, argsTypes: [] },
  yearly: { component: YearlyBox, argsTypes: ["year"] },
  monthly: { component: MonthlyBox, argsTypes: ["month"] },
  monthlyCategory: {
    component: CategoryRankingBox,
    argsTypes: ["month", "genreType"],
  },
  setting: { component: SettingBox, argsTypes: [] },
  reload: { component: ReloadBox, argsTypes: [] },
};
