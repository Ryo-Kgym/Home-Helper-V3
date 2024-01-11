/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ChangeDetailContainer } from "./change/ChangeDetailContainer";
import { CutDetailContainer } from "./cut/CutDetailContainer";
import { Tab, Modal } from "@components/ui";
import { DailyDetail } from "@domain/model/household/DailyDetail";
import { IocomeType } from "@domain/model/household/IocomeType";

export const UpdateDetailPresenter = ({
  initData,
  isOpen,
  onCloseHandler,
}: {
  initData: DailyDetail | null;
  isOpen: boolean;
  onCloseHandler: () => void;
}) => (
  <Modal opened={isOpen} onClose={onCloseHandler}>
    <Tab
      defaultSelect="change"
      tabPropsList={[
        {
          value: "change",
          label: "変更",
          icon: null,
          contents: (
            <ChangeDetailContainer
              initData={initData}
              onClose={onCloseHandler}
            />
          ),
        },
        {
          value: "cut",
          label: "分解",
          icon: null,
          contents: (
            <CutDetailContainer
              initData={
                initData ?? {
                  id: "",
                  date: new Date(),
                  iocomeType: IocomeType.Income,
                  genreId: "",
                  categoryId: "",
                  accountId: "",
                  amount: 0,
                  memo: "",
                }
              }
              onClose={onCloseHandler}
            />
          ),
        },
      ]}
    />
  </Modal>
);
