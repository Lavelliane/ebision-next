import { BookOpen, Calendar, ExternalLink, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { loadData } from "@/lib/data";

const glassCard = "bg-card/60 backdrop-blur-xl border border-border/60 rounded-lg shadow-sm";

interface PreviousEventsData {
  conferences: {
    year: string;
    title: string;
    dates: string;
    location: string;
    venue: string;
    status: string;
    website: string;
    image: string;
    description: string;
    proceedings: string;
    topics: string[];
    organizedBy: string;
    inConjunction: string;
  }[];
  statistics: {
    totalEditions: number;
    countries: number;
    nextEvent: string;
    description: string;
  };
  regionalDistribution: {
    country: string;
    flag: string;
    city: string;
    year: string;
    events: number;
    upcoming: boolean;
  }[];
}

const PreviousEventsPage = async () => {
  const t = await getTranslations("PreviousEventsPage");
  const tCommon = await getTranslations("Common");
  const previousEventsData = await loadData<PreviousEventsData>("previous-events");

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-24">
        <div className="max-w-8xl mx-auto flex flex-col gap-4">
          <h6 className="text-primary">{t("label")}</h6>
          <h1 className="text-foreground">{t("title")}</h1>
          <p className="text-muted-foreground max-w-3xl">
            {previousEventsData.statistics.description}
          </p>
        </div>
      </section>
      {/* Host Locations */}
      <section className="px-4 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="max-w-8xl mx-auto flex flex-col gap-6">
          <h3 className="text-foreground flex items-center">
            <span className="w-1.5 h-6 bg-primary rounded-full mr-4" />
            {t("hostLocations")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {previousEventsData.regionalDistribution.map((region, index) => (
              <div key={index} className={`${glassCard} p-5 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{region.flag}</span>
                  <div>
                    <p className="text-foreground">
                      {region.city}, {region.country}
                    </p>
                    <small className="text-muted-foreground">EBISION {region.year}</small>
                  </div>
                </div>
                {region.upcoming && (
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tCommon("upcoming")}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Event */}
      <section className="px-4 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="max-w-8xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h6 className="text-primary">{t("upcomingLabel")}</h6>
            <h2 className="text-foreground">{t("upcomingTitle")}</h2>
            <p className="text-muted-foreground max-w-3xl">{t("upcomingSubtitle")}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Image */}
            <div className="relative w-full lg:w-1/2 aspect-video rounded-lg overflow-hidden border-2 border-primary/40">
              <Image
                src="/assets/upcoming-event/venue.jpg"
                alt="EBISION 2026 — Kookmin University"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <h4 className="text-white mb-1">{tCommon("venue")}</h4>
                <p className="text-white/80 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {tCommon("location")}
                </p>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {tCommon("upcoming")}
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`${glassCard} p-4 flex items-start gap-3`}>
                  <Calendar className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <small className="text-muted-foreground">{t("datesLabel")}</small>
                    <p className="text-foreground">{tCommon("dates")}</p>
                  </div>
                </div>
                <div className={`${glassCard} p-4 flex items-start gap-3`}>
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <small className="text-muted-foreground">{t("venueLabel")}</small>
                    <p className="text-foreground">{tCommon("venue")}</p>
                  </div>
                </div>
                <div className={`${glassCard} p-4 flex items-start gap-3`}>
                  <Users className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <small className="text-muted-foreground">{t("organizedByLabel")}</small>
                    <p className="text-foreground">IFIP WG 8.4</p>
                  </div>
                </div>
                <div className={`${glassCard} p-4 flex items-start gap-3`}>
                  <BookOpen className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <small className="text-muted-foreground">{t("proceedingsLabel")}</small>
                    <p className="text-foreground">Springer IFIP AICT Series</p>
                  </div>
                </div>
              </div>
              <Button asChild variant="outline" className="w-fit">
                <a href="https://ebision.ifip-wg84.org/" target="_blank" rel="noopener noreferrer">
                  {t("visitWebsite", { year: "2026" })}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Past Conferences */}
      <section className="px-4 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="max-w-8xl mx-auto flex flex-col gap-12">
          {previousEventsData.conferences.map((conference, index) => (
            <div key={index} className="flex flex-col gap-8">
              {/* Conference Header */}
              <div
                className={`flex flex-col gap-2 ${index % 2 === 0 ? "items-end text-right" : ""}`}
              >
                <h6 className="text-primary">{conference.year}</h6>
                <h2 className="text-foreground">EBISION {conference.year}</h2>
                <p className="text-muted-foreground max-w-3xl">{conference.title}</p>
              </div>

              <div
                className={`flex flex-col gap-8 ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                {/* Event Image */}
                <div className="relative w-full lg:w-1/2 aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={conference.image}
                    alt={`EBISION ${conference.year}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                    <h4 className="text-white mb-1">{conference.venue}</h4>
                    <p className="text-white/80 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {conference.location}
                    </p>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-col gap-4 w-full lg:w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={`${glassCard} p-4 flex items-start gap-3`}>
                      <Calendar className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <small className="text-muted-foreground">{t("datesLabel")}</small>
                        <p className="text-foreground">{conference.dates}</p>
                      </div>
                    </div>
                    <div className={`${glassCard} p-4 flex items-start gap-3`}>
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <small className="text-muted-foreground">{t("locationLabel")}</small>
                        <p className="text-foreground">{conference.location}</p>
                      </div>
                    </div>
                    <div className={`${glassCard} p-4 flex items-start gap-3`}>
                      <Users className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <small className="text-muted-foreground">{t("organizedByLabel")}</small>
                        <p className="text-foreground">{conference.organizedBy}</p>
                      </div>
                    </div>
                    <div className={`${glassCard} p-4 flex items-start gap-3`}>
                      <BookOpen className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <small className="text-muted-foreground">{t("proceedingsLabel")}</small>
                        <p className="text-foreground">{conference.proceedings}</p>
                      </div>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-fit">
                    <a href={conference.website} target="_blank" rel="noopener noreferrer">
                      {t("visitWebsite", { year: conference.year })}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PreviousEventsPage;
