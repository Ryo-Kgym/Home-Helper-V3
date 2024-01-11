/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { Button, MantineColor } from "@mantine/core";
import { useDateHolder } from "@hooks/date/useDateHolder";
import { useDate } from "@hooks/date/useDate";

export const DateSelectButton = (
  // @formatter:off
  { type = "today" }: { type?: ButtonType },
) => {
  const { getNow, getThisFirstDate, getThisLastDate } = useDate();
  const { saveTerm } = useDateHolder();
  const { label, color } = TypeMap.get(type)!;

  const { getFromDate, getToDate } = new Map<
    ButtonType,
    { getFromDate: () => Date; getToDate: () => Date }
  >([
    ["today", { getFromDate: getNow, getToDate: getNow }],
    ["month", { getFromDate: getThisFirstDate, getToDate: getThisLastDate }],
  ]).get(type)!;

  return (
    <Button
      onClick={() => saveTerm(getFromDate(), getToDate())}
      color={color}
      size={"md"}
    >
      {label}
    </Button>
  );
};

type ButtonType = "today" | "month";

type MappedType = {
  label: string;
  color: MantineColor;
};

const TypeMap = new Map<ButtonType, MappedType>([
  ["today", { label: "今日", color: "teal" }],
  ["month", { label: "今月", color: "pink" }],
]);
