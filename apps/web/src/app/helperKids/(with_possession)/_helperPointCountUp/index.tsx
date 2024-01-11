/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import Image from "next/image";
import { useGetHelperKid } from "@hooks/help_point/useHelperKidPoint";
import piggy from "@public/piggy_bank.svg";
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
          className={"w-[3em] text-right"}
        />
        <div className={"ml-2"}>{process.env.NEXT_PUBLIC_POINT_UNIT}</div>
      </div>
      <div>
        <Image
          src={
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            piggy
          }
          alt={"piggy"}
          className={"absolute bottom-[-0.25em] right-[-0em] h-10 w-10"}
        />
      </div>
    </div>
  );
};
