import { useSession } from "next-auth/react";
import { Icon } from "../../common/Icons";
import Themes from "./Themes";

const SwitchTheme = () => {
  const { status } = useSession();
  return (
    <>
      {status === "authenticated" && (
        <div className="dropdown dropdown-end dropdown-hover py-2">
          <button className="btn btn-ghost btn-square" tabIndex={0}>
            <Icon icon="ColorSwatchIcon" kind="outline" className="h-6 w-6" />
          </button>

          <div
            tabIndex={0}
            className="dropdown-content w-[21.5rem] sm:w-[38rem] md:w-[45rem] lg:w-[61rem] bg-base-200 text-base-content rounded-t-box rounded-b-box shadow-2xl top-px mt-16"
          >
            <div className="max-h-96 h-[70vh] overflow-y-auto menu menu-compact gap-1 p-3">
              <Themes />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SwitchTheme;
