import { MonthPickerInput } from "@mantine/dates";

type RangeMonthPickerPresenterProps = {
  fromMonth: Date | null;
  changeFromMonth: (_: Date | null) => void;
  toMonth: Date | null;
  changeToMonth: (_: Date | null) => void;
};
export const RangeMonthPickerPresenter = ({
  fromMonth,
  changeFromMonth,
  toMonth,
  changeToMonth,
}: RangeMonthPickerPresenterProps) => (
  <div className={"justify-center"}>
    <MonthPickerInput
      type={"range"}
      value={[fromMonth, toMonth]}
      onChange={(range: [Date | null, Date | null]) => {
        changeFromMonth(range[0]);
        changeToMonth(range[1]);
      }}
      label={"MONTH"}
      valueFormat={"YYYY-MM"}
    />
  </div>
);
