import Image from "next/image";
import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";
import { MENU_ITEMS } from "@/constants";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className={`bottom-auto z-50 fixed inset-4`}>
      <nav
        className={`flex justify-between items-center py-2 pl-2 pr-4 rounded-lg bg-background shadow-md`}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Aperture Visions Photography"
            className="filter invert"
            height={60}
            width={60}
          />
          <span className="text-foreground text-xl md:text-2xl font-bold font-inter">
            Aperture Visions
          </span>
        </Link>
        <div className="flex md:hidden text-foreground text-lg font-bold font-inter">
          <SidebarTrigger className="text-foreground text-lg font-bold font-inter">
            <MenuIcon className="size-6" />
          </SidebarTrigger>
        </div>
        <div className="items-center gap-8 hidden md:flex">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground text-lg font-bold font-inter"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
