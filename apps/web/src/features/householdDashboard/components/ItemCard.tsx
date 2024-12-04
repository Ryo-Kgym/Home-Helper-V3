import { FC, PropsWithChildren } from "react";

import styles from "./ItemCard.module.scss";

/**
 * @package
 */
export const ItemCard: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.module}>{children}</div>;
};
