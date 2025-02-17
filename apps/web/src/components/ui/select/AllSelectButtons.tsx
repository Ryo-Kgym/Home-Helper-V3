import type { SelectData } from "./v5";

export const AllSelectButtons = ({
  options,
  onChange,
}: {
  options: SelectData[];
  onChange: (_: string[]) => void;
}) => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button
        style={{
          border: "1px solid #ccc",
          padding: "4px",
          borderRadius: "30%",
          backgroundColor: "inherit",
        }}
        type={"button"}
        onClick={() => {
          const values = options.flatMap((option) => {
            if ("group" in option)
              return option.items.map((item) => {
                if (typeof item === "string") {
                  return item;
                }
                return item.value;
              });

            return option.value;
          });

          onChange(values);
        }}
      >
        全選択
      </button>
      <button
        style={{
          border: "1px solid #ccc",
          padding: "4px",
          borderRadius: "30%",
          backgroundColor: "#ccc",
        }}
        type={"button"}
        onClick={() => onChange([])}
      >
        全解除
      </button>
    </div>
  );
};
