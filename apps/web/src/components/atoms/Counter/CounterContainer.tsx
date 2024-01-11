/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useEffect, useState } from "react";
import { CounterPresenter } from "./CounterPresenter";

type CounterContainerProps = {
  defaultValue: number;
  setCountHandler: (_diff: number, _nowCount: number) => void;
  min?: number;
  max?: number;
  forceReset?: boolean;
};
export const CounterContainer = ({
  defaultValue,
  setCountHandler,
  min = 0,
  max = 9999,
  forceReset = false,
}: CounterContainerProps) => {
  const [count, setCount] = useState(defaultValue);

  const handleIncrement = () => {
    if (count < max) {
      setCountHandler(1, count + 1);
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      setCountHandler(-1, count - 1);
      setCount(count - 1);
    }
  };

  const clearHandler = () => {
    setCountHandler(-1 * count, defaultValue);
    setCount(defaultValue);
  };

  useEffect(
    clearHandler,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [defaultValue, forceReset],
  );

  return (
    <CounterPresenter
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      clearHandler={clearHandler}
    />
  );
};
