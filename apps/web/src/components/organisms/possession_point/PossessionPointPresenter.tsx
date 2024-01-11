/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import Image from "next/image";
import piggy from "@public/piggy_bank.svg";
import Countup from "react-countup";

type PossessionPointPresenterProps = {
  userName: string;
  currentPoint: number;
};

export const PossessionPointPresenter = ({
  userName,
  currentPoint,
}: PossessionPointPresenterProps) => (
  <Point name={userName} point={currentPoint} />
);

const Point = ({ name, point }: { name: string; point: number }) => (
  <>
    <div
      style={{
        fontSize: "120px",
        width: "6.1em",
        height: "2.7em",
        position: "relative",
      }}
    >
      <div
        className={
          "absolute left-[1em] top-[-0.5em] z-10 flex bg-white text-4xl"
        }
      >
        {name} の今のポイント
      </div>
      <div
        className={
          "flex rounded-lg border-8 border-double border-black " +
          "absolute h-[2.2em] w-[5.2em] justify-end text-9xl " +
          "pl-[0.01em] pt-[0.5em]"
        }
      >
        <Countup
          end={point}
          duration={1}
          formattingFn={(n) => n.toLocaleString()}
        />
        <div className={"flex pl-5 pr-5 pt-12 text-7xl"}>
          {process.env.NEXT_PUBLIC_POINT_UNIT}
        </div>
      </div>
      <div>
        <Image
          src={
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            piggy
          }
          alt={"piggy"}
          className={"absolute bottom-0 right-0 h-32 w-32"}
        />
      </div>
    </div>
  </>
);
