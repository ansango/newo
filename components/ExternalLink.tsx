import { FC ,ReactNode} from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const ExternalLink: FC<Props> = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export default ExternalLink;
