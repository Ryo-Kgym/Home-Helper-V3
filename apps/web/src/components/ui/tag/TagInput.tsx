"use client";

import { FC, useState } from "react";

import styles from "./TagInput.module.scss";

type Props = {
  data: {
    label: string;
    value: string;
  }[];
};

export const TagInput: FC<Props> = ({ data }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const dataObject = Object.fromEntries(
    data.map((tag) => [tag.value, tag.label]),
  );

  return (
    <div className={styles.module} onMouseLeave={() => setOpenSelect(false)}>
      <button
        className={styles.input}
        onMouseOver={() => setOpenSelect(true)}
        onFocus={() => setOpenSelect(true)}
      >
        {selected.map((tag) => (
          <span key={tag} data-testid={"tagInput-selected-value"}>
            {dataObject[tag]}
          </span>
        ))}
      </button>
      {openSelect && (
        <ul className={styles.selector}>
          {data.map((tag) => (
            <li key={tag.value}>
              <TagInputCheckbox
                id={tag.value}
                label={tag.label}
                checked={selected.includes(tag.value)}
                onChange={() => {
                  if (selected.includes(tag.value)) {
                    setSelected(selected.filter((t) => t !== tag.value));
                  } else {
                    setSelected([...selected, tag.value]);
                  }
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TagInputCheckbox: FC<{
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}> = ({ id, label, checked, onChange }) => (
  <div>
    <input type="checkbox" id={id} checked={checked} onChange={onChange} />
    <label htmlFor={id}>{label}</label>
  </div>
);
