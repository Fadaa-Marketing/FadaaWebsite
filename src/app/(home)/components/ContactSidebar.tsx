"use client";

import { headerLinks } from "@/constant";
import LinkClient from "@/app/components/shared/LinkClient";
import { usePathname } from "next/navigation";

export default function ContactSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      <div
        className={`form-overlay ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } lg:hidden block `}
        onClick={onClose}
      />

      <aside
        className={`${open ? "translate-x-0" : "translate-x-full"} aside-form lg:hidden`}
      >
        <div className="sidebar-content sidebar-mobile">
          <button className="sidebar-close-button" onClick={onClose}>
            &times;
          </button>
          <div className="sidebar-links-container">
            {headerLinks?.map((link) => (
              <LinkClient
                href={link.href}
                key={link.title}
                className={`header-links-style ${
                  pathname === link.href ? "active-link-underline" : ""
                }`}
                onClick={handleLinkClick}
              >
                {link.title}
              </LinkClient>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
