/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { selectDateRecoilState } from "@recoil/selectDateRecoilState";
import { useRecoilState } from "recoil";
import { useDate } from "@hooks/date/useDate";

export const useDateHolder = () => {
  const [dateState, setDate] = useRecoilState(selectDateRecoilState);
  const { offsetDate } = useDate();

  return {
    fromDate: dateState.fromDate,
    toDate: dateState.toDate,
    save: (date: Date) => {
      setDate({
        fromDate: offsetDate(date),
        toDate: offsetDate(date),
      });
    },
    saveTerm: (fromDate: Date, toDate: Date) => {
      setDate({
        fromDate: offsetDate(fromDate),
        toDate: offsetDate(toDate),
      });
    },
  };
};
