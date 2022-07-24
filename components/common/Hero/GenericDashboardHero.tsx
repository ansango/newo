import { useRouter } from "next/router";
import { FC } from "react";
import { Icon } from "../Icons";

type Props = {
  title: string;
};

const GenericDashboardHero: FC<Props> = ({ title }) => {
  const { back } = useRouter();
  return (
    <div className="hero h-20">
      <div className="hero-content justify-start w-full p-0 max-w-full">
        <div className="w-full flex justify-between">
          <h1 className="text-3xl font-bold dark:text-gray-300">{title}</h1>
          <button className="btn btn-ghost" onClick={back}>
            <Icon icon="ArrowLeftIcon" kind="outline" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenericDashboardHero;
