/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import type { TableProps } from "@components/atoms/Table";
import { Modal } from "@components/atoms/Modal";
import { Table } from "@components/atoms/Table";
import { IocomeTotal } from "@components/molecules/Total";
import { LoadFileProps } from "@features/householdFileImport/types";

import { SetPropertiesContainer } from "./SetPropertiesContainer";

type FileImportTablePresenterProps = {
  tableProps: TableProps[];
  opened: boolean;
  onClose: () => void;
  initialValues: LoadFileProps;
  loadData: LoadFileProps[];
  setLoadData: (_: LoadFileProps[]) => void;
  income: number | undefined;
  outcome: number | undefined;
};
export const FileImportTablePresenter = ({
  tableProps,
  opened,
  onClose,
  initialValues,
  loadData,
  setLoadData,
  income,
  outcome,
}: FileImportTablePresenterProps) => (
  <div className={"grid"}>
    <div>
      <Table
        header={["決済日", "備考", "支出金額", "ジャンル", "カテゴリ"]}
        tablePropsList={tableProps}
        size={"xs"}
        height={"75vh"}
        defaultBottom={false}
      />
    </div>
    <div>
      <IocomeTotal income={income} outcome={outcome} />
    </div>
    <Modal opened={opened} onClose={onClose}>
      <SetPropertiesContainer
        initialValues={initialValues}
        initLoadData={loadData}
        setLoadData={setLoadData}
        onClose={onClose}
      />
    </Modal>
  </div>
);
