import { FC } from "react";

type BlankAvatar = {
  size: "xs" | "sm" | "md" | "lg";
  email: Email;
};

enum textBlank {
  xs = "text-xs",
  sm = "",
  md = "text-xl",
  lg = "text-3xl",
}

enum sizeBlank {
  xs = "w-8",
  sm = "w-12",
  md = "w-24",
  lg = "w-32",
}

const BlankAvatar: FC<BlankAvatar> = ({ size, email }) => {
  const cnSize = `${sizeBlank[size]} bg-neutral-focus text-neutral-content rounded`;
  const cnText = `${textBlank[size]} uppercase`;
  return (
    <div className="avatar placeholder">
      <div className={cnSize}>
        <span className={cnText}>{email.charAt(0)}</span>
      </div>
    </div>
  );
};

export default BlankAvatar;
