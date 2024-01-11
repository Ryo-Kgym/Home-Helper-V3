/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { LoginButton } from "@components/molecules/AuthButton";

export const LoginPresenter = ({
  message,
}: {
  message: string | undefined;
}) => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Title />
    <ButtonArea>
      <LoginButton />
    </ButtonArea>
    {message && <p className={"p-4 text-red-500"}>{message}</p>}
  </div>
);

const Title = () => (
  <h1 className="text-6xl font-bold">うちのアプリへ ようこそ！</h1>
);

const ButtonArea = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => (
  <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
    {children}
  </div>
);
