import { NavLinks } from "@/constants";
import Link from "next/link";

interface MobileNavProps {
  isMenuOpen: boolean;
  onToggle: () => void;
}

const MobileNav = ({ isMenuOpen, onToggle }: MobileNavProps) => {
  return (
    <>
      {/* Dark overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 z-20 ${
          isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => onToggle()}
        aria-hidden="true"
      />
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-2/3 z-50 bg-white p-4
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
      >
        <nav className="px-8 py-10">
          <ul className="space-y-4 text-lg">
            {NavLinks.map((link) => (
              <li key={link.id} onClick={onToggle}>
                <Link href={link.href} onClick={onToggle} className="block">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
