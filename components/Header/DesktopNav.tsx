import React from "react";
import Link from "next/link";
import { NavLinks } from "@/constants";

const DesktopNav = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-8">
        {NavLinks.map((link) => (
          <li
            key={link.id}
            className="hover:scale-110 hover:font-semibold transition-all duration-200"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
