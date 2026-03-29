import { Instagram } from "lucide-react";
import { useLang } from "./context/LanguageContext";
import { useScrollReveal } from "./hooks/useScrollReveal";



const SocialSection = () => {
  const { t } = useLang();
  const ref = useScrollReveal();


  const TikTokIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`h-5 w-5 text-[#B8956A] group-hover:text-[#b76e79] transition-colors ${className}`}
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.86 4.86 0 01-1-.15z" />
  </svg>
);

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#F8F3ED] to-[#F3ECE5]"
    >
      <div
        ref={ref}
        className="section-reveal mx-auto max-w-2xl px-6 text-center"
      >
        {/* TITLE */}
        <h2 className="font-display text-3xl font-light tracking-[0.12em] text-[#B8956A] sm:text-4xl">
          {t("Na Ndiqni", "Follow Us")}
        </h2>

        {/* DIVIDER */}
        <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#D6BFA7] to-transparent" />

        {/* DESCRIPTION */}
        <p className="font-body mt-6 text-sm text-[#7D6A58]">
          {t(
            "Na ndiqni për inspirim dhe projektet më të fundit.",
            "Follow us for inspiration and latest projects."
          )}
        </p>

        {/* ICONS */}
        <div className="mt-10 flex justify-center gap-6">
          
          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/am_eventsandcatering?igsh=MWZsOWNxeGtkcjJs&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,160,0.4)]"
          >
            <Instagram
              size={22}
              className="text-[#B8956A] transition-colors group-hover:text-[#b76e79]"
            />

            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-[#d4af9a]/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
          </a>
<a
  href="https://www.tiktok.com/@am_events_catering?_r=1&_t=ZS-94vjNoQTE0b"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="TikTok"
  className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,160,0.4)]"
>
  <TikTokIcon />

  {/* glow */}
  <div className="absolute inset-0 rounded-full bg-[#d4af9a]/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
</a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;