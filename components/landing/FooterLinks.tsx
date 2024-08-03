import type { FC, ReactNode } from "react";

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

const FooterLink: FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group w-full rounded-full bg-transparent px-2 text-sm text-white/50 transition-colors duration-300 ease-in-out hover:text-white/90"
  >
    {children}
  </a>
);

const FooterLinks = () => {
  return (
    <div className="flex justify-items-end space-x-4 lg:flex">
      <FooterLink href="">
        <div className="flex items-center gap-3">
          <p>Status</p>
          <div className="h-[6px] w-[6px] animate-pulse items-center justify-items-end rounded-full bg-green-500 ring-[3px] ring-green-500 ring-opacity-60"></div>
        </div>
      </FooterLink>
    </div>
  );
};

export default FooterLinks;
