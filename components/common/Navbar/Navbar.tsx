import Link from "next/link";
import Structure from "../Structure";
import Brand from "./Brand";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import SignIn from "./SignIn";
import SwitchTheme from "./SwitchTheme";
import User from "./User";

const Navbar = () => {
  return (
    <Structure>
      <div className="navbar bg-base-100 rounded-box sticky top-0 z-50">
        <div className="navbar-start">
          <NavMobile />
          <Brand />
          <NavDesktop />
        </div>

        <div className="navbar-end">
          <SwitchTheme />
          <User />
          <SignIn />
        </div>
      </div>
    </Structure>
  );
};

export default Navbar;
