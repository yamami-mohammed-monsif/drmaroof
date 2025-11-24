import Section from "../UI/Section";
import Link from "next/link";
import Image from "next/image";
import { NavLinks, SocialLinks } from "@/constants";
import { MapPin, MailIcon, Phone } from "lucide-react";

const Footer = () => {
  return (
    <Section className="bg-footer-bg text-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div>
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt="Dr.Maroof Logo"
              width={80}
              height={80}
              className="aspect-square w-11 md:w-14 lg:w-20"
              priority
              quality={85}
            />
          </Link>
        </div>
        <ul className="flex flex-col gap-3">
          {NavLinks.map((link) => (
            <li key={link.id} className="hover:underline">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-3">
          {SocialLinks.map((link) => (
            <li key={link.id} className="hover:underline">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-1 md:gap-2">
            <MapPin className="inline mr-2 w-5" />
            <p>La Familia Medical Center, Al Barsha 3, Dubai</p>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <MailIcon className="inline mr-2 w-5" />
            <p>drmaroofbegdxb@gmail.com</p>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <Phone className="inline mr-2 w-5" />
            <p>052 300 5493</p>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20 flex flex-col gap-8 md:flex-row justify-center">
        <div className="flex flex-col gap-3 md:flex-row order-1 md:order-2">
          <Link href="/" className="underline">
            Privacy Policy
          </Link>
          <Link href="/" className="underline">
            Terms of Service
          </Link>
        </div>
        <p>Copyright © 2025 | Dr. Maroof Beg</p>
      </div>
    </Section>
  );
};

export default Footer;
