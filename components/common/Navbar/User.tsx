import { routeActive } from "@/utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import Avatar from "../Avatar/Avatar";
import { Icon } from "../Icons";
import { userNavRoutes } from "../../../lib/constants/routes";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { defaultTheme } from "lib/constants/config";
import { authSelector, logout } from "@/store/features/auth";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/hooks";
import { Dropdown } from "react-daisyui";

const User: FC = () => {
  const { isAuthenticated, user } = useSelector(authSelector);
  const dispatch = useAppDispatch();
  const { pathname } = useRouter();
  const { setTheme } = useTheme();

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: "/signin" });
      dispatch(logout());
      setTheme(defaultTheme);
    } catch (error) {}
  };
  return (
    <>
      {isAuthenticated && (
        <Dropdown vertical="end" hover>
          <Dropdown.Toggle button={false} className="btn btn-ghost btn-square">
            {user && <Avatar size="xs" email={user.email} />}
          </Dropdown.Toggle>
          <Dropdown.Menu className="menu menu-compact p-2 shadow w-52">
            {userNavRoutes.map(({ label, path, icon }) => {
              const cn = routeActive(pathname, path)
                ? "bg-primary text-primary-content"
                : "";
              if (pathname.includes("dashboard")) {
                return;
              }
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
              <a onClick={handleSignOut}>
                <Icon kind="outline" icon="LogoutIcon" className="w-4 h-4" />
                Cerrar Sesión
              </a>
            </li>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

export default User;
