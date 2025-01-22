import { ReactNode } from "react";

import { NavbarSection } from "../../_layout/NavbarSection";
import { Navi } from "../../_layout/navi";
import { RegisterDailyButtonServer } from "../../../features/householdRegisterDaily/components/RegisterDailyButtonServer";
import { paths } from "../../../routing/paths";

export const HouseholdLayout = ({ children }: { children: ReactNode }) => (
  <div className={"bg-white text-black"}>
    <NavbarSection header={"家計簿アプリ"} naviArray={householdMenu}>
      {children}
      <div className={"absolute bottom-16 left-12 z-[110]"}>
        <RegisterDailyButtonServer />
      </div>
    </NavbarSection>
  </div>
);

const householdMenu: Navi[] = [
  {
    label: "戻る",
    url: paths.group.select,
  },
  {
    label: "ダッシュボード",
    url: paths.household.dashboard,
  },
  {
    label: "残高チャート",
    url: paths.household.balanceChart,
  },
  {
    label: "カテゴリチャート",
    url: paths.household.categoryChart,
  },
  {
    label: "検索",
    url: paths.household.search,
  },
  {
    label: "アカウント",
    url: paths.household.account,
  },
  {
    label: "クレカ履歴",
    url: paths.household.creditCard,
  },
  {
    label: "ファイル取込",
    url: paths.household.fileImport,
  },
  {
    label: "設定",
    url: paths.household.setting.genre,
  },
  {
    label: "タイムカード",
    url: paths.business.timecard,
  },
];
