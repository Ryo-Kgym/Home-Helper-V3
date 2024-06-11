export { MantineDrawer as Drawer } from "./MantineDrawer";

/**
 * @package
 */
export type DrawerProps = {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
