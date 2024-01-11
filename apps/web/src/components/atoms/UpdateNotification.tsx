/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Group, Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import { showNotification, updateNotification } from "@mantine/notifications";

type UpdateNotificationProps = {
  label: string;
  showTitle: string;
  showMessage: string;
  updateTitle: string;
  updateMessage: string;
  handleClick: () => void;
  handleAfterProcess: () => void;
  updateTime?: number;
  autoClose?: number;
};

export const UpdateNotification = ({
  label,
  showTitle,
  showMessage,
  updateTitle,
  updateMessage,
  handleClick,
  handleAfterProcess,
  updateTime,
  autoClose,
}: UpdateNotificationProps) => (
  <Group>
    <Button
      onClick={() => {
        showNotification({
          id: "load-data",
          loading: true,
          title: showTitle,
          message: showMessage,
          autoClose: false,
        });

        handleClick();

        setTimeout(() => {
          updateNotification({
            id: "load-data",
            color: "teal",
            title: updateTitle,
            message: updateMessage,
            icon: <IconCheck size={16} />,
            autoClose: autoClose ?? 2000,
          });
          handleAfterProcess();
        }, updateTime ?? 3000);
      }}
      color={"blue"}
      size={"xl"}
    >
      {label}
    </Button>
  </Group>
);
