import { FC } from "react";
import FullAvatar from "./FullAvatar";
import BlankAvatar from "./BlankAvatar";

type AvatarProps = {
  size: "xs" | "sm" | "md" | "lg";
  imgUrl?: string | null;
  email: Email;
};

const Avatar: FC<AvatarProps> = ({ size, imgUrl, email }) => {
  const avatar = imgUrl;
  return avatar ? (
    <FullAvatar size={size} imgUrl={avatar} />
  ) : email ? (
    <BlankAvatar size={size} email={email} />
  ) : null;
};

export default Avatar;
