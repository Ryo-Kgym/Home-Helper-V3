/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { useGetHelperKid } from "@hooks/help_point/useHelperKidPoint";
import piggy from "@public/piggy_bank.svg";
import Image from "next/image";
import Countup from "react-countup";

export const HelperPointCountUp = () => {
  const { getCurrentPoint } = useGetHelperKid();

  return (
    <div>
      <div className={"flex"}>
        <Countup
          end={getCurrentPoint()}
          duration={1}
          formattingFn={(n) => n.toLocaleString()}
          className={"text-right w-[3em]"}
        />
        <div className={"ml-2"}>{process.env.NEXT_PUBLIC_POINT_UNIT}</div>
      </div>
      <div>
        <Image
          src={piggy}
          alt={"piggy"}
          className={"w-10 h-10 absolute bottom-[-0.25em] right-[-0em]"}
        />
      </div>
    </div>
  );
};
