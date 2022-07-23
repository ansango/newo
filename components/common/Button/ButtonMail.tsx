import React from "react";
import { FC } from "react";
import { Icon } from "../Icons";

type Props = {
  label?: string;
  isFull?: boolean;
  isLoading?: boolean;
};

const ButtonMail: FC<Props> = ({ isFull, label, isLoading }) => {
  const full = isFull ? "w-full" : "";
  const loading = isLoading ? "loading" : "";
  const cn = `btn btn-primary normal-case ${full} ${loading} gap-2`;
  return (
    <button className={cn} type="submit">
      <span>{label}</span>
      <Icon icon="MailIcon" className="w-5 h-5" kind="outline" />
    </button>
  );
};

export default ButtonMail;
