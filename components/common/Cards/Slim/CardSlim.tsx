import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const CardSlim: FC<Props> = ({ children }) => {
  return (
    <div className="card card-compact overflow-visible w-full image-full opacity-90 glass shadow-md bg-secondary-focus hover:bg-secondary-focus text-secondary-content">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardSlim;
