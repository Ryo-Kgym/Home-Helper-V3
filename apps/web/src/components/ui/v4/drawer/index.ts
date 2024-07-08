export { MantineDrawer as Drawer } from "./MantineDrawer";
export { OpenedDrawer } from "./OpenedDrawer";

/**
 * @package
 */
export type DrawerProps = {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
