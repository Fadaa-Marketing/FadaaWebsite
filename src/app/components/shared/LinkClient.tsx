"use client";

import Link, { LinkProps } from "next/link";
import { beforeNavigate } from "../../utils/navigation";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface LinkClientProps extends LinkProps {
  className?: string;
  target?: string;
  rel?: string;
  children?: ReactNode; // optional now
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
