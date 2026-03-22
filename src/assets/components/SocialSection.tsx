import { Instagram } from "lucide-react";
import { useLang } from "./context/LanguageContext";
import { useScrollReveal } from "./hooks/useScrollReveal";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.86 4.86 0 01-1-.15z" />
  </svg>
);

const SocialSection = () => {
  const { t } = useLang();
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div ref={ref} className="section-reveal mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl font-light tracking-wide text-foreground sm:text-4xl text-balance">
          {t("Na Ndiqni", "Follow Us")}
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-primary/40" />
        <p className="font-body mt-6 text-sm text-muted-foreground">
          {t(
            "Na ndiqni për inspirim dhe projektet ma të fundit.",
            "Follow us for inspiration and latest projects."
          )}
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-hover flex h-14 w-14 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-hover flex h-14 w-14 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
