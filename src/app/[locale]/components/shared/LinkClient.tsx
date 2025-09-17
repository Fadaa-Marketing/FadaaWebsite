"use client";

import { Link, usePathname } from "../../../../../i18n/navigation";
import { beforeNavigate } from "../../utils/navigation";
import { ReactNode } from "react";

interface LinkClientProps {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function LinkClient({
  href,
  className,
  children,
  target,
  rel,
  onClick,
  ...rest
}: LinkClientProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== href) beforeNavigate();
    if (onClick) onClick(e);
  };

  return (
    <Link
      {...rest}
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children ?? " "}
    </Link>
  );
}
