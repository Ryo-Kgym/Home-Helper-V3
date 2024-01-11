/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Button, Flex } from "@mantine/core";

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
    <div className={"flex items-center justify-center w-10 text-xl"}>
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
  <Button className={"bg-lime-500 text-xl w-10 h-10 p-0"} onClick={handleClick}>
    +
  </Button>
);

const Decrement = ({ handleClick }: { handleClick: () => void }) => (
  <Button className={"bg-red-300 text-xl w-10 h-10 p-0"} onClick={handleClick}>
    -
  </Button>
);
