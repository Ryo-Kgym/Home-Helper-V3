import { Drawer } from "@mantine/core";

import { DrawerProps } from ".";

export const MantineDrawer = ({ opened, onClose, children }: DrawerProps) => {
  return (
    <Drawer opened={opened} onClose={onClose} size={"lg"}>
      {children}
    </Drawer>
  );
};
