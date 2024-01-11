import { useRouter } from "next/navigation";
import { AuthButtonPresenter } from "@components/molecules/AuthButton/AuthButtonPresenter";

export const SignUpButtonContainer = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { push } = useRouter();

  const label = "Sign Up";
  const onClickHandler = () => push("/sign-up");

  return <AuthButtonPresenter label={label} onClickHandler={onClickHandler} />;
};
