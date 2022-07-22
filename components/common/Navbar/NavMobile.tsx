import { routeActive } from "@/utils/router";
import { routes } from "lib/data/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import Icon from "../Icons/Icon";


const NavMobile: FC = () => {
  const { pathname } = useRouter();
  return (
    <div className="dropdown dropdown-hover py-2 md:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-square">
        <Icon icon="MenuAlt2Icon" kind="outline" className="w-6 h-6" />
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content top-px mt-16 p-2 shadow bg-base-200 rounded-box w-52"
      >
        {routes.map(({ label, path, icon }) => {
          const cn = routeActive(pathname, path)
            ? "bg-primary text-base-content"
            : "";
          return (
            <li key={path}>
              <Link href={path}>
                <a className={cn}>
                  <Icon icon={icon} kind="outline" className="w-4 h-4" />
                  {label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMobile;
