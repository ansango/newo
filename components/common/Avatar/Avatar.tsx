import { FC } from "react";
import FullAvatar from "./FullAvatar";
import BlankAvatar from "./BlankAvatar";
import { selectUser } from "@/store/features/user";

type AvatarProps = {
  size: "xs" | "sm" | "md" | "lg";
  imgUrl?: string | null;
  username: Username;
};

const Avatar: FC<AvatarProps> = ({ size, imgUrl, username }) => {
  const avatar = imgUrl;
  

  return avatar ? (
    <FullAvatar size={size} imgUrl={avatar} />
  ) : username ? (
    <BlankAvatar size={size} username={username} />
  ) : null;
};

export default Avatar;
