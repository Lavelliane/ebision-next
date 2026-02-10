import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const footerLinks = {
  about: [
    { key: "overview" as const, href: "/overview", disabled: false },
    { key: "organization" as const, href: "/organization", disabled: false },
    { key: "lifetimeAchievement" as const, href: "/lifetime-achievement", disabled: false },
    { key: "previousEvents" as const, href: "/previous-events", disabled: false },
  ],
  program: [
    { key: "programSchedule" as const, href: "/program", disabled: true },
    { key: "keynotes" as const, href: "/keynotes", disabled: true },
  ],
  participate: [
    { key: "authorInstructions" as const, href: "/author-instruction", disabled: false },
    { key: "registration" as const, href: "/registration", disabled: true },
    { key: "contact" as const, href: "/contact", disabled: false },
  ],
};

const categoryKeys = {
  about: "about",
  program: "program",
  participate: "participate",
} as const;

const Footer = async () => {
  const t = await getTranslations("Footer");
  const tCommon = await getTranslations("Common");

  return (
    <footer className="w-full bg-primary">
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo and Conference Info */}
          <div className="flex flex-col md:items-start items-center md:text-left text-center gap-4">
            <Image
              src="/assets/logo/ebision-logo-white.svg"
              alt="EBISION Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <div className="flex flex-col gap-1">
              <h5 className="text-primary-foreground">{tCommon("conferenceName")}</h5>
              <small className="text-primary-foreground/60">{tCommon("conferenceFullTitle")}</small>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {(
              Object.entries(footerLinks) as [
                keyof typeof categoryKeys,
                (typeof footerLinks)[keyof typeof footerLinks],
              ][]
            ).map(([category, links]) => (
              <div key={category}>
                <h6 className="text-primary-foreground mb-4">{t(categoryKeys[category])}</h6>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.key}>
                      {link.disabled ? (
                        <span className="text-primary-foreground/30 cursor-not-allowed pointer-events-none">
                          <small>{t(link.key)}</small>
                        </span>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                        >
                          <small>{t(link.key)}</small>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <small className="text-primary-foreground/60">{t("copyright")}</small>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <small>{t("privacyPolicy")}</small>
            </Link>
            <Link
              href="/terms"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <small>{t("termsOfService")}</small>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
