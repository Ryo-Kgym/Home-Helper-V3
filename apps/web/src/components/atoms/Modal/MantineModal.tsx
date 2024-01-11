/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Modal } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type ModalPresenterProps = {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const MantineModal = ({
  opened,
  onClose,
  children,
}: ModalPresenterProps) => {
  const isMobile = useMediaQuery("(max-width: 50em)");
  return (
    <Modal opened={opened} onClose={onClose} size={"75%"} fullScreen={isMobile}>
      {children}
    </Modal>
  );
};
