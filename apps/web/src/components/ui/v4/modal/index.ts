export { TailWindCSSModal as Modal } from "./TailWindCSSModal";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
