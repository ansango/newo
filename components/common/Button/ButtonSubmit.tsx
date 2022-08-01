import { FC } from "react";
import { Button } from "react-daisyui";

type Props = {
  label?: string;
  isFull?: boolean;
  isLoading?: boolean;
};

const ButtonSubmit: FC<Props> = ({
  isLoading = false,
  isFull = false,
  label = "Guardar",
}) => {
  const full = isFull ? "w-full" : "";
  const loading = isLoading ? "loading" : "";
  const cn = `btn btn-primary normal-case ${full} ${loading}`;
  return (
    <Button type="submit" className="normal-case">
      {label}
    </Button>
  );
};

export default ButtonSubmit;
