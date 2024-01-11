/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { DatePicker } from "@components/ui/date";

export const RangeDatePicker = ({
  fromDate = new Date("2010-01-01"),
  changeFromDate,
  toDate = new Date("2099-12-31"),
  changeToDate,
  disabled = false,
}: {
  fromDate: Date | null;
  changeFromDate: (_: Date) => void;
  toDate: Date | null;
  changeToDate: (_: Date) => void;
  disabled?: boolean;
}) => (
  <div className={"grid grid-cols-5 items-center"}>
    <div className={"col-span-2"}>
      <DatePicker
        value={fromDate!}
        onChange={changeFromDate}
        disabled={disabled}
      />
    </div>
    <div className={"text-center"}>〜</div>
    <div className={"col-span-2"}>
      <DatePicker
        value={toDate!}
        onChange={changeToDate}
        disabled={disabled}
        required
      />
    </div>
  </div>
);
