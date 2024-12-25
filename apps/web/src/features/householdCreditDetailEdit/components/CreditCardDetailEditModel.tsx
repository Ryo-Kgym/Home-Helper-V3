import { ComponentProps, FC } from "react";

import { Modal } from "../../../components/atoms/Modal";
import { CreditCardDetailEditContainer } from "./CreditCardDetailEditContainer";

type Props = ComponentProps<typeof CreditCardDetailEditContainer> & {
  isOpen: boolean;
  onCloseHandler: () => void;
};

export const CreditCardDetailEditModal: FC<Props> = ({
  id,
  isOpen,
  onCloseHandler,
}) => {
  return (
    <Modal opened={isOpen} onClose={onCloseHandler}>
      <CreditCardDetailEditContainer id={id} />
    </Modal>
  );
};
