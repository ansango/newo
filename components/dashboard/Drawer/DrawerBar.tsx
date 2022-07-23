import { routeActive } from "@/utils/router";
import { Icon } from "components/common/Icons";
import { routesDashboard } from "lib/data/routes";
import { type SessionContextValue, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

type SessionContext = Record<keyof SessionContextValue, any>;

const DrawerBar = () => {
  const { pathname } = useRouter();
  const { status, data } = useSession() as SessionContext;
  const isAdmin = data.user.roles.includes("admin");
  const isUser = data.user.roles.includes("user");
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
          {isUser && (
            <>
              <div className="divider my-3"></div>
              {routesDashboard
                .filter(({ roles }) => roles.includes("user"))
                .map(({ label, path, icon }) => {
                  const cn = routeActive(pathname, path)
                    ? "bg-primary text-primary-content"
                    : "";
                  return (
                    <li key={path}>
                      <Link href={path}>
                        <a className={cn}>
                          <Icon
                            icon={icon}
                            kind="outline"
                            className="w-5 h-5"
                          />
                          {label}
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </>
          )}

          {isAdmin && (
            <>
              <div className="divider my-3"></div>
              {routesDashboard
                .filter(({ roles }) => roles.includes("admin"))
                .map(({ label, path, icon }) => {
                  const cn = routeActive(pathname, path)
                    ? "bg-primary text-primary-content"
                    : "";
                  return (
                    <li key={path}>
                      <Link href={path}>
                        <a className={cn}>
                          <Icon
                            icon={icon}
                            kind="outline"
                            className="w-5 h-5"
                          />
                          {label}
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default DrawerBar;
