export const OpenSettingButton = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <button className={"bg-inherit"} onClick={onOpen}>
      設定
    </button>
  );
};
