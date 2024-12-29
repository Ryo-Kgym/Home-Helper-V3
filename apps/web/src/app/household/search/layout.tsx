import { ReactNode } from "react";

import styles from "./layout.module.scss";

const Layout = ({ form, list }: { form: ReactNode; list: ReactNode }) => {
  return (
    <div className={styles.module}>
      <div className={styles.form}>{form}</div>
      <div>{list}</div>
    </div>
  );
};

export default Layout;
