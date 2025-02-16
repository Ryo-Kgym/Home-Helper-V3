import type { RadioButtonProps } from "../props";
import styles from "./RadioButton.module.scss";

export const RadioButton = <T extends string = string>({
  id,
  label,
  onChange,
  checked,
}: RadioButtonProps<T>) => {
  return (
    <div className={styles.module}>
      <input
        type={"radio"}
        onChange={(v) => onChange(v.target.value as T)}
        checked={checked}
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
