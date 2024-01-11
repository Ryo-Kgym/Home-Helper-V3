/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { TableProps } from "@components/atoms/Table";
import { Table } from "@components/atoms/Table/index";
import { UpdateNotification } from "@components/atoms/UpdateNotification";

type ConsumePointPresenterProps = {
  currentPoint: number;
  totalUsePoint: number;
  handleRequest: () => void;
  handleRegisterAfterProcess: () => void;
  tableProps: TableProps[];
};

export const ExchangePointPresenter = ({
  currentPoint,
  totalUsePoint,
  handleRequest,
  handleRegisterAfterProcess,
  tableProps,
}: ConsumePointPresenterProps) => (
  <div>
    <Table
      header={["交換品", "ポイント", "交換数"]}
      tablePropsList={tableProps}
      height={"70vh"}
      size={"sm"}
    />
    <div
      className={
        "sticky grid grid-cols-2 justify-items-center gap-4 max-md:grid-cols-1"
      }
    >
      <LeavePointBox
        currentPoint={currentPoint}
        totalUsePoint={totalUsePoint}
      />
      <UpdateNotification
        label={"交換申請"}
        showTitle={"ポイント交換"}
        showMessage={"ポイントと交換中です。"}
        updateTitle={"ポイント交換完了"}
        updateMessage={"ポイントを交換したよ"}
        handleClick={handleRequest}
        handleAfterProcess={handleRegisterAfterProcess}
      />
    </div>
  </div>
);

const FormulaFlex = ({ label, point }: { label: string; point: number }) => (
  <div>
    <div className={"text-xs text-gray-400"}>{label}</div>
    <div className={"text-right text-3xl"}>{point.toLocaleString()}</div>
  </div>
);

const LeavePointBox = ({
  currentPoint,
  totalUsePoint,
}: {
  currentPoint: number;
  totalUsePoint: number;
}) => (
  <div className={"flex items-center space-x-5"}>
    <FormulaFlex label={"今のポイント"} point={currentPoint} />
    <div>-</div>
    <FormulaFlex label={"交換したいポイント"} point={totalUsePoint} />
    <div>=</div>
    <FormulaFlex
      label={"残りのポイント"}
      point={currentPoint - totalUsePoint}
    />
  </div>
);
