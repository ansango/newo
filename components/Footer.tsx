import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import ExternalLink from "./ExternalLink";
import Structure from "./Structure";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <Structure>
      <hr className="w-full border-1 border-primary my-8" />
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <ExternalLink href="https://instagram.com/iamasync">
            Instagram
          </ExternalLink>
          <ExternalLink href="https://twitter.com/iamasync_">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/ansango">GitHub</ExternalLink>
        </div>
      </footer>
    </Structure>
  );
};

export default Footer;
