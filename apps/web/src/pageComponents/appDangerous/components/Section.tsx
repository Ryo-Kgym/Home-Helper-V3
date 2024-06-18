import { Trash } from "@components/ui/v4/icon/Trash";

export const Section = ({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string;
  onClick: () => void;
}) => (
  <div
    className={
      "flex items-center justify-between rounded border-2 p-10 hover:bg-red-50/50"
    }
  >
    <div>
      <div className={"text-2xl"}>{title}</div>
      <div>{description}</div>
    </div>
    <button className={"bg-inherit"} onClick={onClick}>
      <Trash />
    </button>
  </div>
);
