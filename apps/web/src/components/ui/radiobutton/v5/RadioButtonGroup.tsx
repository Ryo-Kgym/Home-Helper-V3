import { RadioButtonGroupProps } from "../props";
import { RadioButton } from "./RadioButton";
import styles from "./RadioButton.module.scss";

export const RadioButtonGroup = <T extends string = string>({
  id: radioButtonGroup,
  value,
  onChange,
  label,
  data,
  // orientation,
}: RadioButtonGroupProps<T>) => {
  return (
    <div className={styles.moduleGroup}>
      <span>{label}</span>
      <div className={styles.group}>
        {data.map((v) => {
          const id = `${radioButtonGroup}-${v.value}`;

          return (
            <RadioButton
              key={id}
              id={id}
              label={v.label}
              onChange={() => onChange(v.value)}
              checked={value === v.value}
            />
          );
        })}
      </div>
    </div>
  );
};
