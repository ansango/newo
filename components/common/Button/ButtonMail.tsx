import React from "react";
import { FC } from "react";
import { Button } from "react-daisyui";
import { Icon } from "../Icons";

type Props = {
  label?: string;
  isLoading?: boolean;
};

const ButtonMail: FC<Props> = ({ label, isLoading }) => {
  return (
    <Button
      color="primary"
      fullWidth
      loading={isLoading}
      endIcon={<Icon icon="MailIcon" className="w-5 h-5" kind="outline" />}
      className="normal-case"
      type="submit"
    >
      {label}
    </Button>
  );
};

export default ButtonMail;
