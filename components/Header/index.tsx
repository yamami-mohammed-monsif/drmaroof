"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuButton from "../UI/MenuButton";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Escape key support
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);
  return (
    <>
      <MobileNav isMenuOpen={isMenuOpen} onToggle={handleToggleMenu} />

      <header className="font-nunito-sans animate-fade-in">
        <div className="flex items-center justify-between px-5 md:px-8 lg:px-[100px] pt-4">
          <div>
            <Link href="/">
              <Image
                src="/logo-black.svg"
                alt="Dr.Maroof Logo"
                width={80}
                height={80}
                className="aspect-square w-11 md:w-14 lg:w-20"
                priority
                quality={85}
              />
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-6">
            <DesktopNav />
            <button className="bg-cta text-white flex items-center gap-2 ml-8 px-6 py-3 rounded-sm hover:bg-cta-hover transition-colors duration-300">
              <Link
                href="https://wa.me/971523005493?text=Hello,%20I%20would%20like%20to%20book%20the%20Free%20Consultation."
                target="_blank"
              >
                Book Free Consultation
              </Link>
            </button>
          </div>

          <div className="lg:hidden">
            <MenuButton
              isOpen={isMenuOpen}
              onToggle={handleToggleMenu}
              ariaLabel="Navigation Menu"
              size="default"
              className="text-text focus:outline-none"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
