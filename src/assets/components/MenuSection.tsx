import { useLang } from "./context/LanguageContext";
import { useScrollReveal } from "./hooks/useScrollReveal";
import cocktails from "@/assets/cocktails.jpeg";
import fingerFood from "@/assets/finger-food.jpeg";
import churros from "@/assets/churros.jpeg";
import miniPancakes from "@/assets/mini-pancakes.jpeg";

const MenuSection = () => {
  const { t } = useLang();
  const ref = useScrollReveal();

  const items = [
    {
      image: cocktails,
      title: t("Pije & Kokteje Premium", "Premium Drinks & Cocktails"),
    },
    {
      image: fingerFood,
      title: "Finger Food",
    },
    {
      image: churros,
      title: t("Ëmbëlsina", "Sweets"),
    },
    {
      image: miniPancakes,
      title: t("Mini Brunch Bites", "Mini Brunch Bites"),
    },
  ];

  return (
    <section id="menu" className="bg-secondary/50 py-24 sm:py-32">
      <div ref={ref} className="section-reveal mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-light tracking-wide text-foreground sm:text-4xl md:text-5xl text-balance">
            {t("Menu", "Menu")}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary/40" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass-card-hover group overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-medium text-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
