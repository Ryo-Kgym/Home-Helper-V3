/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { TabProps } from "@components/ui";
import { RangeMonthPicker } from "@components/molecules/RangeMonthPicker/index";
import { Tab } from "@components/ui/Tabs/index";

type SummaryPresenterProps = {
  fromMonth: Date | null;
  setFromMonth: (_: Date | null) => void;
  toMonth: Date | null;
  setToMonth: (_: Date | null) => void;
  defaultSelect: string;
  tabPropsList: TabProps[];
};

export const SummaryPresenter = ({
  fromMonth,
  setFromMonth,
  toMonth,
  setToMonth,
  defaultSelect,
  tabPropsList,
}: SummaryPresenterProps) => (
  <div>
    <RangeMonthPicker
      fromMonth={fromMonth}
      changeFromMonth={setFromMonth}
      toMonth={toMonth}
      changeToMonth={setToMonth}
    />
    <Tab defaultSelect={defaultSelect} tabPropsList={tabPropsList} />
  </div>
);
