import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  PanelLeftCloseIcon,
  SidebarCloseIcon,
  XIcon,
  XSquareIcon,
} from "lucide-react";
import { MENU_ITEMS } from "@/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Aperture Visions Photography",
    absolute: "Aperture Visions Photography",
  },
  description:
    "Aperture Visions Photography is a photography studio that specializes in capturing the beauty of the world.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aperture Visions Photography",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased dark`}
      >
        <SidebarProvider className="flex flex-col items-center">
          <Navbar />

          <Sidebar
            className="md:hidden"
            collapsible="offcanvas"
            side="right"
            variant="floating"
          >
            <SidebarHeader className="flex-row items-center justify-between p-4">
              <span className="text-2xl font-bold">Menu</span>
              <SidebarTrigger>
                <XIcon className="size-6" />
              </SidebarTrigger>
            </SidebarHeader>
            <SidebarContent className="p-4">
              <SidebarMenu>
                {MENU_ITEMS.map((item) => (
                  <SidebarMenuButton asChild key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </SidebarMenuButton>
                ))}
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter />
          </Sidebar>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
