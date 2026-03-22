import tableDecor from "@/assets/table-decor.jpeg";
import eventDecor from "@/assets/event-decor.jpeg";
import { useLang } from "./context/LanguageContext";
import { useScrollReveal } from "./hooks/useScrollReveal";

const GallerySection = () => {
  const { t } = useLang();
  const ref = useScrollReveal();

  const images = [tableDecor, eventDecor];

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div ref={ref} className="section-reveal mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-light tracking-wide text-foreground sm:text-4xl md:text-5xl text-balance">
            {t("Dekorime të personalizueme për çdo event", "Personalized styling for every event")}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary/40" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {images.map((src, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt="Event decoration"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
