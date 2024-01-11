/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { HelperKid } from "@domain/model/helper_kids/HelperKid";

type Props = {
  kids: HelperKid[];
  saveKidHandler: (_: string) => void;
};

export const SelectKidPresenter = ({ kids, saveKidHandler }: Props) => (
  <div className={"w-full"}>
    {kids.map(({ id, name }) => (
      <button
        key={id}
        className={
          "mx-auto my-10 w-1/2 cursor-pointer rounded-2xl border-2 border-gray-300 hover:border-gray-500 " +
          "max-sm:w-full"
        }
        onClick={() => saveKidHandler(id)}
      >
        <div className={"my-10 text-center text-6xl"}>{name}</div>
      </button>
    ))}
  </div>
);
