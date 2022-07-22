
import ButtonSubmit from "components/common/Button/ButtonSubmit";
import { FC } from "react";

const SignUpButton: FC = () => {
  const loading = false;
  return <ButtonSubmit isLoading={loading} isFull label="Registrarse" />;
};

export default SignUpButton;
