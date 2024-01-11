/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Table, TableProps } from "@components/atoms/Table/index";
import { UpdateNotification } from "@components/atoms/UpdateNotification";

type ChargePointPresenterProps = {
  fromDate: string;
  currentPoint: number;
  totalPoint: number;
  handleRegisterHelps: () => void;
  handleRegisterAfterProcess: () => void;
  tableProps: TableProps[];
};

export const ChargePointPresenter = ({
  currentPoint,
  totalPoint,
  handleRegisterHelps,
  handleRegisterAfterProcess,
  tableProps,
}: ChargePointPresenterProps) => (
  <div>
    <Table
      header={["お手伝い", "ポイント", "回数"]}
      tablePropsList={tableProps}
      height={"70vh"}
      size={"sm"}
    />
    <div
      className={
        "justify-items-center sticky grid grid-cols-2 gap-4 max-md:grid-cols-1"
      }
    >
      <TotalPointBox currentPoint={currentPoint} totalUsePoint={totalPoint} />
      <UpdateNotification
        label={"お手伝い申請"}
        showTitle={"お手伝いを申請中だよ！"}
        showMessage={""}
        updateTitle={"お手伝いの申請が完了したよ！"}
        updateMessage={""}
        handleClick={handleRegisterHelps}
        handleAfterProcess={handleRegisterAfterProcess}
      />
    </div>
  </div>
);

const FormulaFlex = ({ label, point }: { label: string; point: number }) => (
  <div>
    <div className={"text-gray-400 text-xs"}>{label}</div>
    <div className={"text-3xl text-right"}>{point.toLocaleString()}</div>
  </div>
);

const TotalPointBox = ({
  currentPoint,
  totalUsePoint,
}: {
  currentPoint: number;
  totalUsePoint: number;
}) => (
  <div className={"flex items-center space-x-5"}>
    <FormulaFlex label={"今のポイント"} point={currentPoint} />
    <div>+</div>
    <FormulaFlex label={"お手伝いしたポイント"} point={totalUsePoint} />
    <div>=</div>
    <FormulaFlex
      label={"合計のポイント"}
      point={currentPoint + totalUsePoint}
    />
  </div>
);
