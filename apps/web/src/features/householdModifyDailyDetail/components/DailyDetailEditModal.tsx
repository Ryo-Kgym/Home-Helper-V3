import { Modal } from "../../../components/atoms/Modal";
import { Tab } from "../../../components/ui";
import {
  DailyDetail,
  initialState,
} from "../../../domain/model/household/DailyDetail";
import { CutDetailContainer } from "./CutDetailContainer";
import { ModifyDailyDetail } from "./ModifyDailyDetail";

export const DailyDetailEditModal = ({
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
            <ModifyDailyDetail id={initData.id} onClose={onCloseHandler} />
          ),
        },
        {
          value: "cut",
          label: "分解",
          icon: null,
          contents: (
            <CutDetailContainer
              initData={initData ?? initialState}
              onClose={onCloseHandler}
            />
          ),
        },
      ]}
    />
  </Modal>
);
