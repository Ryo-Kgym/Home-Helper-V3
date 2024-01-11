/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Button } from "@mantine/core";

type CounterProps = {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  clearHandler: () => void;
};

export const CounterPresenter = ({
  count,
  handleIncrement,
  handleDecrement,
  clearHandler,
}: CounterProps) => (
  <div className={"flex space-x-2"}>
    <Decrement handleClick={handleDecrement} />
    <div className={"flex w-10 items-center justify-center text-xl"}>
      {count}
    </div>
    <Increment handleClick={handleIncrement} />
    <div className={"flex items-center justify-center"}>
      <Button
        className={"h-5 px-3"}
        onClick={clearHandler}
        color={"gray"}
        size={"sm"}
      >
        CLEAR
      </Button>
    </div>
  </div>
);

const Increment = ({ handleClick }: { handleClick: () => void }) => (
  <Button className={"h-10 w-10 bg-lime-500 p-0 text-xl"} onClick={handleClick}>
    +
  </Button>
);

const Decrement = ({ handleClick }: { handleClick: () => void }) => (
  <Button className={"h-10 w-10 bg-red-300 p-0 text-xl"} onClick={handleClick}>
    -
  </Button>
);
