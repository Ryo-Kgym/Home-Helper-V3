import { ReactNode } from "react";

import { ModalProps } from "./index";

export const TailWindCSSModal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={
        "absolute left-0 top-0 z-50 m-0 flex h-full w-full items-center justify-center bg-black/50"
      }
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
      tabIndex={0}
      role="tab"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          onClose();
        }
      }}
    >
      <div
        className={
          "h-2/3 min-h-[200px] w-2/3 max-w-[1024px] overflow-y-scroll bg-white p-5 text-left"
        }
        onClick={(event) => {
          event.stopPropagation();
        }}
        tabIndex={0}
        role="tab"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.stopPropagation();
            onClose();
          }
        }}
      >
        <Header onClose={onClose} />
        {children}
      </div>
    </div>
  );
};

const Header = ({ onClose }: { onClose: ModalProps["onClose"] }) => {
  return (
    <div className={"flex justify-end"}>
      <button type="button" className={"bg-inherit text-2xl"} onClick={onClose}>
        ×
      </button>
    </div>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

TailWindCSSModal.Body = Body;
