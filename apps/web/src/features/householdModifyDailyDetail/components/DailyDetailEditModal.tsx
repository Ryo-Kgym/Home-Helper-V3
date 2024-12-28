import { Modal } from "../../../components/atoms/Modal";
import { Tab } from "../../../components/ui";
import { CutDailyDetail } from "./CutDailyDetail";
import { ModifyDailyDetail } from "./ModifyDailyDetail";

export const DailyDetailEditModal = ({
  id,
  isOpen,
  onCloseHandler,
}: {
  id: string;
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
          contents: <ModifyDailyDetail id={id} onClose={onCloseHandler} />,
        },
        {
          value: "cut",
          label: "分解",
          icon: null,
          contents: <CutDailyDetail id={id} onClose={onCloseHandler} />,
        },
      ]}
    />
  </Modal>
);
