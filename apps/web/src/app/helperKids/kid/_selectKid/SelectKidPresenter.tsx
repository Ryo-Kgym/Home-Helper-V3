/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { HelperKid } from "@domain/model/helper_kids/HelperKid";

type Props = {
  kids: HelperKid[];
  saveKidHandler: (_: string) => void;
};

export const SelectKidPresenter = ({ kids, saveKidHandler }: Props) => (
  <div className={"w-full"}>
    {kids.map(({ id, name }) => (
      <div
        key={id}
        className={
          "w-1/2 border-2 mx-auto my-10 rounded-2xl border-gray-300 hover:border-gray-500 cursor-pointer " +
          "max-sm:w-full"
        }
        onClick={() => saveKidHandler(id)}
      >
        <div className={"text-6xl my-10 text-center"}>{name}</div>
      </div>
    ))}
  </div>
);
