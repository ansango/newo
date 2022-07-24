import React from "react";
import { FC } from "react";
import { IconSimple } from "../Icons";
import { signIn } from "next-auth/react";
import { useState } from "react";

type Props = {
  label?: string;
  isFull?: boolean;
};

const ButtonGoogle: FC<Props> = ({ isFull, label }) => {
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

  const full = isFull ? "w-full" : "";
  const loading = isLoading ? "loading" : "";
  const cn = `btn btn-primary btn-outline normal-case ${full} ${loading} gap-2`;
  return (
    <button className={cn} onClick={handleSignIn}>
      <span>{label}</span>
      <IconSimple icon="Google" className="w-4 h-4" />
    </button>
  );
};

export default ButtonGoogle;
