import { routeActive } from "@/utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import Avatar from "../Avatar/Avatar";
import { Icon } from "../Icons";
import { userNavRoutes } from "../../../lib/data/routes";

const User: FC = () => {
  const { pathname, replace } = useRouter();

  const user = {} as any;

  return (
    <>
      {user && (
        <div className="dropdown dropdown-hover py-2 dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-square">
            <Avatar size="xs" username={user.username} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-16 top-px p-2 shadow bg-base-200 rounded-box w-52"
          >
            {userNavRoutes.map(({ label, path, icon }) => {
              const cn = routeActive(pathname, path)
                ? "bg-primary text-primary-content"
                : "";
              return (
                <li key={path}>
                  <Link href={path}>
                    <a className={cn}>
                      <Icon kind="outline" icon={icon} className="w-4 h-4" />
                      {label}
                    </a>
                  </Link>
                </li>
              );
            })}
            <li>
              <a onClick={() => {}}>
                <Icon kind="outline" icon="LogoutIcon" className="w-4 h-4" />
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default User;
