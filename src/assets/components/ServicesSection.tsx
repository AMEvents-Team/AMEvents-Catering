import brandedChocolates from "@/assets/branded-chocolates.webp";
import macaroonsTable from "@/assets/macaroons-table.jpeg";
import canvasEvent from "@/assets/canvas-event.jpeg";
import { useLang } from "./context/LanguageContext";
import { useScrollReveal } from "./hooks/useScrollReveal";

const ServicesSection = () => {
  const { t } = useLang();
  const ref = useScrollReveal();

  const services = [
    {
      title: t("Catering për Dasma & Fejesa", "Wedding & Engagement Catering"),
      desc: t(
        "Menu të kurueme me elegancë për ditën ma të veçantë.",
        "Curated luxury menus for unforgettable celebrations."
      ),
      image: macaroonsTable,
    },
    {
      title: t("Evente Korporative", "Corporate Events"),
      desc: t(
        "Prezantim profesional me shije që len mbresa.",
        "Professional presentation with memorable taste."
      ),
      image: canvasEvent,
    },
    {
      title: t("Festa Private & Personalizime", "Private Events & Personalized Details"),
      desc: t(
        "Çokollata me logo, evente familjare, detaje unike.",
        "Branded chocolates, family celebrations, unique details."
      ),
      image: brandedChocolates,
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32">
      <div ref={ref} className="section-reveal mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-light tracking-wide text-foreground sm:text-4xl md:text-5xl text-balance">
            {t("Shërbimet Tona", "Our Services")}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary/40" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="glass-card-hover group flex flex-col items-center p-8 text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-6 h-24 w-24 overflow-hidden rounded-full">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-display mb-3 text-xl font-medium text-foreground sm:text-2xl">
                {s.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
