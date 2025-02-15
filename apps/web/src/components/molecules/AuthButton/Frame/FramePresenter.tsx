/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

export const FramePresenter = ({
  children,
  onClickHandler,
}: {
  children: React.ReactNode;
  onClickHandler: () => void;
}) => (
  <button
    type="button"
    className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    onClick={onClickHandler}
  >
    {children}
  </button>
);
