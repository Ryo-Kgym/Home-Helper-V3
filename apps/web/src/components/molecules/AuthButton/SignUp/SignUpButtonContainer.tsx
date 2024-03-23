import { useRouter } from "next/navigation";
import { AuthButtonPresenter } from "@components/molecules/AuthButton/AuthButtonPresenter";

export const SignUpButtonContainer = () => {
  const { push } = useRouter();

  const label = "Sign Up";
  const onClickHandler = () => push("/sign-up");

  return <AuthButtonPresenter label={label} onClickHandler={onClickHandler} />;
};
