import ButtonSubmit from "components/common/Button/ButtonSubmit";
import { FC } from "react";

const SigInButton: FC = () => {
  const loading = false;
  return <ButtonSubmit isLoading={loading} isFull label="Iniciar sesión" />;
};

export default SigInButton;
