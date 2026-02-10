"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { CookieProvider } from "@/components/cookie-provider";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { LanguageToggle } from "./LanguageToggle";
import { ModeToggle } from "./ModeToggle";

const EBISION_SUBNAV = [
  { key: "home" as const, href: "/", disabled: false },
  { key: "overview" as const, href: "/overview", disabled: false },
  { key: "organization" as const, href: "/organization", disabled: false },
  { key: "previousEvents" as const, href: "/previous-events", disabled: false },
];

const NAV_LINKS = [
  { key: "program" as const, href: "/program", disabled: true },
  { key: "keynotes" as const, href: "/keynotes", disabled: true },
  { key: "authorInstructions" as const, href: "/author-instruction", disabled: false },
  { key: "contact" as const, href: "/contact", disabled: false },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.split("#")[1];
    if (!hash) return;

    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      router.push(href);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <CookieProvider>
      <div className="sticky top-0 z-999 bg-background w-full">
        {/* Shared toggles — rendered once to avoid duplicate Radix IDs */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center gap-px">
          <LanguageToggle />
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon-2xl"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </Button>
        </div>

        {/* ─── Mobile nav ─── */}
        <nav className="flex lg:hidden items-center justify-between w-full px-4 py-3">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/assets/logo/ebision-logo.svg"
              alt="EBISION Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent side="right" className="w-72 pt-12">
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/assets/logo/ebision-logo.svg"
                    alt="EBISION Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-1 px-4">
                {EBISION_SUBNAV.map((item) =>
                  item.disabled ? (
                    <span
                      key={item.key}
                      className="px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground/50 cursor-not-allowed"
                    >
                      {t(item.key)}
                    </span>
                  ) : (
                    <SheetClose asChild key={item.key}>
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleAnchorClick(e, item.href);
                          setMobileOpen(false);
                        }}
                        className="px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      >
                        {t(item.key)}
                      </Link>
                    </SheetClose>
                  ),
                )}
              </div>

              <Separator className="mx-4" />

              <div className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((item) =>
                  item.disabled ? (
                    <span
                      key={item.key}
                      className="px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground/50 cursor-not-allowed"
                    >
                      {t(item.key)}
                    </span>
                  ) : (
                    <SheetClose asChild key={item.key}>
                      <Link
                        href={item.href}
                        className="px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      >
                        {t(item.key)}
                      </Link>
                    </SheetClose>
                  ),
                )}
              </div>
            </SheetContent>
          </Sheet>
        </nav>

        {/* ─── Desktop nav ─── */}
        <NavigationMenu className="hidden lg:flex justify-between items-center w-full max-w-8xl shrink-0">
          <NavigationMenuList className="flex-wrap flex-1 relative">
            {/* EBISION with sub-navigation */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Image
                  src="/assets/logo/ebision-logo.svg"
                  alt="EBISION Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex gap-1 flex-1 w-full absolute top-0 left-0">
                {EBISION_SUBNAV.map((item) =>
                  item.disabled ? (
                    <div
                      key={item.key}
                      className="flex-1 flex flex-row items-center gap-3 text-nowrap py-20 justify-center cursor-not-allowed opacity-40"
                    >
                      <div className="w-px h-4 bg-transparent" />
                      <h6>{t(item.key)}</h6>
                      <div className="w-px h-4 bg-transparent" />
                    </div>
                  ) : (
                    <NavigationMenuLink asChild key={item.key} className="flex-1">
                      <Link
                        href={item.href}
                        onClick={(e) => handleAnchorClick(e, item.href)}
                        className="group/item flex-row flex-1 items-center gap-3 text-nowrap py-20 justify-center"
                      >
                        <div className="w-px h-4 group-hover/item:bg-primary bg-transparent transition-colors duration-300" />
                        <h6>{t(item.key)}</h6>
                        <div className="w-px h-4 group-hover/item:bg-primary bg-transparent transition-colors duration-300" />
                      </Link>
                    </NavigationMenuLink>
                  ),
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Top-level links */}
            {NAV_LINKS.map((item) => (
              <NavigationMenuItem key={item.key}>
                {item.disabled ? (
                  <span
                    className={`${navigationMenuTriggerStyle()} opacity-40 cursor-not-allowed pointer-events-none`}
                  >
                    <h6>{t(item.key)}</h6>
                  </span>
                ) : (
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={item.href}>
                      <h6>{t(item.key)}</h6>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </CookieProvider>
  );
}
