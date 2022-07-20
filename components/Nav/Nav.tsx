import Link from "next/link";
import Structure from "../Structure";
import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";

const Nav = () => {
  return (
    <Structure>
      <div className="navbar bg-base-100 rounded-box">
        <div className="space-x-2">
          <div className="avatar">
            <div className="bg-gradient-to-r from-secondary to-accent rounded-full w-5"></div>
          </div>
          <span className="font-semibold">ansango</span>
        </div>

        <div className="flex justify-end flex-1">
          <SwitchLanguage />
          <SwitchTheme />
        </div>
      </div>
    </Structure>
  );
};

export default Nav;
