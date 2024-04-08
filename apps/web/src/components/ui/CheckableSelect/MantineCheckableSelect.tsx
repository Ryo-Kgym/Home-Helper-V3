/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { Checkbox } from "@mantine/core";
import { useState } from "react";

import type { CheckableSelectProps } from "@components/ui";

export const MantineCheckableSelect = <T extends { id: string }>({
  values,
  setValues,
  data,
  converter,
}: CheckableSelectProps<T>) => {
  const checkAfterHandler = (value: boolean, id: string) => {
    if (value) {
      setValues([...values, data.find((d) => d.id === id)!]);
    } else {
      setValues(values.filter((d) => d.id !== id));
    }
  };

  return (
    <div className={"flex-1"}>
      {data.map((d: T) => (
        <CheckableRow
          key={d.id}
          checkAfterHandler={(value) => checkAfterHandler(value, d.id)}
        >
          {converter(d)}
        </CheckableRow>
      ))}
    </div>
  );
};

const CheckableRow = ({
  children,
  checkAfterHandler = () => undefined,
}: {
  children: React.ReactNode | React.ReactNode[];
  checkAfterHandler?: (value: boolean) => void;
}) => {
  const [check, setCheck] = useState(false);
  const checkHandler = () => {
    setCheck(!check);
    checkAfterHandler(!check);
  };

  return (
    <div className={"flex space-x-5 p-2 hover:bg-gray-100"}>
      <div className={"m-2 flex items-center"}>
        <Checkbox checked={check} onChange={checkHandler} />
      </div>
      <button className={"flex bg-inherit"} onClick={checkHandler}>
        {children}
      </button>
    </div>
  );
};
