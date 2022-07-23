import { routeActive } from "@/utils/router";
import { Icon, Logo } from "components/common/Icons";
import { routes, routesDashboard } from "lib/data/routes";
import Link from "next/link";
import { useRouter } from "next/router";

const DrawerBar = () => {
  const { pathname } = useRouter();
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content border-r">
        <div className="flex flex-col w-full">
          <div className="">
            <li>
              <Link href="/" passHref>
                <a
                  className={
                    routeActive(pathname, "/") ? "bg-primary text-white" : ""
                  }
                >
                  <div className="avatar">
                    <div className="bg-gradient-to-r from-secondary to-accent rounded-full w-5"></div>
                  </div>
                  Inicio
                </a>
              </Link>
            </li>
          </div>

          <div className="divider my-3"></div>
          {routesDashboard
            .filter(({ roles }) => roles.includes("user"))
            .map(({ label, path, icon, roles }) => {
              const cn = routeActive(pathname, path)
                ? "bg-primary text-white"
                : "";
              return (
                <li key={path}>
                  <Link href={path}>
                    <a className={cn}>
                      <Icon icon={icon} kind="outline" className="w-5 h-5" />
                      {label}
                    </a>
                  </Link>
                </li>
              );
            })}
          <div className="divider my-3"></div>
          {routesDashboard
            .filter(({ roles }) => roles.includes("admin"))
            .map(({ label, path, icon, roles }) => {
              const cn = routeActive(pathname, path)
                ? "bg-primary text-white"
                : "";
              return (
                <li key={path}>
                  <Link href={path}>
                    <a className={cn}>
                      <Icon icon={icon} kind="outline" className="w-5 h-5" />
                      {label}
                    </a>
                  </Link>
                </li>
              );
            })}
        </div>
      </ul>
    </div>
  );
};

export default DrawerBar;
