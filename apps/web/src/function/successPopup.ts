import toast from "react-hot-toast";

export function successPopup(message: string) {
  toast.success(message);
}

export function errorPopup(message: string) {
  toast.error(message);
}
