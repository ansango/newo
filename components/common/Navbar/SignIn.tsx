import { routeActive } from "@/utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import Icon from "../Icons/Icon";

const SignIn: FC = () => {
  const { pathname } = useRouter();
  const user = false
  const isActive = routeActive(pathname, "/signin");
  return (
    <>
      {!user && (
        <Link href="/signin" passHref>
          <div className="tooltip tooltip-left" data-tip="Iniciar sesión">
            <button className="btn btn-ghost btn-square">
              <Icon
                icon="LoginIcon"
                kind="outline"
                className={isActive ? "h-6 w-6" : "h-6 w-6"}
              />
            </button>
          </div>
        </Link>
      )}
    </>
  );
};

export default SignIn;
