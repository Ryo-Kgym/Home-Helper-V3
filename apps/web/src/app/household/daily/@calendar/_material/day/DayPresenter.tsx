/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Modal } from "@components/atoms/Modal/index";
import { RegisterDailyDetail } from "@components/organisms/register_daily_detail/index";

type DayPresenterProps = {
  date: Date;
  displayDay: string;
  income: number | undefined;
  outcome: number | undefined;
  isToday: boolean;
  isNotThisMonth: boolean;
  opened: boolean;
  onClose: () => void;
  openClickHandler: () => void;
  saveDateHandler: () => void;
};
export const DayPresenter = ({
  date,
  displayDay,
  income,
  outcome,
  isToday,
  isNotThisMonth,
  opened,
  onClose,
  openClickHandler,
  saveDateHandler,
}: DayPresenterProps) => (
  <>
    <button
      className={`h-32 cursor-pointer border-b-2 border-r-2 border-gray-400 bg-inherit hover:bg-amber-200
      ${isToday && "bg-amber-100"} ${isNotThisMonth && "bg-gray-300"}`}
      onClick={saveDateHandler}
    >
      <div className={"h-1/3 w-1/3"}>
        <DayLabel openClickHandler={openClickHandler}>{displayDay}</DayLabel>
      </div>

      <div className={"grid h-2/3 grid-cols-1"}>
        <TotalLine
          price={income}
          backgroundColor={`${income && "bg-green-300"} `}
        />
        <TotalLine
          price={outcome}
          backgroundColor={`${outcome && "bg-red-300"} `}
        />
        <TotalLine
          price={income && outcome ? income - outcome : undefined}
          backgroundColor={`${income && outcome && "bg-yellow-300"}`}
        />
      </div>
    </button>
    <Modal opened={opened} onClose={onClose}>
      <RegisterDailyDetail date={date} />
    </Modal>
  </>
);

const DayLabel = ({
  openClickHandler,
  children,
}: {
  openClickHandler: () => void;
  children: React.ReactNode;
}) => (
  <button
    className={
      "m-1 h-[2em] w-[2em] cursor-pointer rounded-full bg-amber-200/20 pt-1 text-center"
    }
    onClick={openClickHandler}
  >
    {children}
  </button>
);
const TotalLine = ({
  price,
  backgroundColor = "bg-inherit",
}: {
  price: number | undefined;
  backgroundColor: string | undefined;
}) => (
  <div
    className={`m-0.5 rounded-md pr-1 ${backgroundColor} h-[1.5em] text-right`}
  >
    {price?.toLocaleString() ?? ""}
  </div>
);
