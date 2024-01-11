import { AuthButtonPresenter } from "@components/molecules/AuthButton/AuthButtonPresenter";
import { useRouter } from "next/navigation";

export const SignUpButtonContainer = () => {
  const { push } = useRouter();

  const label = "Sign Up";
  const onClickHandler = () => push("/sign-up");

  return <AuthButtonPresenter label={label} onClickHandler={onClickHandler} />;
};
