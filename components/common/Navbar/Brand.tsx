import { routeActive } from "@/utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const Brand: FC = () => {
  const { pathname } = useRouter();
  return (
    <Link href="/" passHref>
      <button className="btn btn-ghost gap-2">
        <div className="avatar">
          <div className="bg-gradient-to-r from-secondary to-accent rounded-full w-5"></div>
        </div>
        <span
          className={
            routeActive(pathname, "/") ? "font-semibold" : "font-semibold"
          }
        >
          Fit Tracker
        </span>
      </button>
    </Link>
  );
};

export default Brand;
