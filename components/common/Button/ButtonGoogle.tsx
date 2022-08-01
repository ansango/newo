import React from "react";
import { FC } from "react";
import { IconSimple } from "../Icons";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "react-daisyui";

type Props = {
  label?: string;
};

const ButtonGoogle: FC<Props> = ({ label }) => {
  const [isLoading, setIsloading] = useState(false);
  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsloading(true);
    try {
      await signIn("google");
    } catch (error) {
      setIsloading(false);
    }
  };

  return (
    <Button
      color="primary"
      fullWidth
      loading={isLoading}
      variant="outline"
      endIcon={<IconSimple icon="Google" className="w-4 h-4" />}
      className="normal-case"
      onClick={handleSignIn}
    >
      {label}
    </Button>
  );
};

export default ButtonGoogle;
