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
  ...rest
}: LinkClientProps) {
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) beforeNavigate();
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
