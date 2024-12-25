import { Modal } from "../../../components/atoms/Modal";
import { Tab } from "../../../components/ui";
import { DailyDetail } from "../../../domain/model/household/DailyDetail";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { CutDetailContainer } from "./CutDetailContainer";
import { ModifyDailyDetail } from "./ModifyDailyDetail";

export const UpdateDetail = ({
  initData,
  isOpen,
  onCloseHandler,
}: {
  initData: DailyDetail;
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
            <ModifyDailyDetail initData={initData} onClose={onCloseHandler} />
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
