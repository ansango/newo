import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const CardSlim: FC<Props> = ({ children }) => {
  return (
    <div className="card card-compact glass overflow-visible shadow-md bg-secondary-focus hover:bg-secondary-focus text-secondary-content w-full">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardSlim;
