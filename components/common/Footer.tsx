import Link from "next/link";

import Structure from "./Structure";

const Footer = () => {
  return (
    <Structure>
      <hr className="w-full border-1 border-primary my-8" />
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>Fit Tracker {new Date().getFullYear()}</div>
      </footer>
    </Structure>
  );
};

export default Footer;
