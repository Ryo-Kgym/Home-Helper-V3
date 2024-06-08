import { Button } from "@components/ui/v4/button";

export const OpenViewFilterButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <Button label={"フィルター"} clickHandler={onClose} type={"display"} />
  );
};