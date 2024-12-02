"use client";

import { NavbarSection } from "@app/_layout/NavbarSection";
import { Navi } from "@app/_layout/navi";
import { RegisterDailyButton } from "@components/molecules";
import { paths } from "@routing/paths";

export const HouseholdLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className={"bg-white text-black"}>
    <NavbarSection header={"家計簿アプリ"} naviArray={householdMenu}>
      {children}
      <div className={"absolute bottom-16 left-12 z-[110]"}>
        <RegisterDailyButton />
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
    url: "#",
  },
  {
    label: "> 残高",
    url: paths.household.dashboard,
  },
  {
    label: "> カテゴリ",
    url: paths.household.categoryChart,
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
    url: paths.household.setting,
  },
];
