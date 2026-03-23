import { useLang } from "./context/LanguageContext";
import { useScrollReveal } from "./hooks/useScrollReveal";
import cocktails from "@/assets/cocktails.jpeg";
import fingerFood from "@/assets/finger-food.jpeg";
import churros from "@/assets/churros.jpeg";
import miniPancakes from "@/assets/mini-pancakes.jpeg";
import fruits from "@/assets/fruits.jpeg";
import fonduecorner from "@/assets/fonduecorner.jpeg";


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
    {
      image: fruits,
      title: t("Fruta të Freskëta", "Fresh Fruits"),
    },
     {
      image: fonduecorner,
      title: t("Këndi i Çokollatës së Shkrirë", "Chocolate Fondue Corner"),
    },
  ];

  return (
    <section
      id="menu"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#F8F3ED] to-[#F3ECE5]"
    >
      <div ref={ref} className="section-reveal mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-light tracking-wide text-[#b76e79] sm:text-4xl md:text-5xl text-balance">
            {t("Menu", "Menu")}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-[#d4af9a]/60" />
        </div>

        {/* ✅ GRID I RREGULLUAR */}
<div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">          {items.map((item, i) => (
            <div
              key={i}
              className="
                w-full max-w-sm
                glass-card-hover 
                group 
                overflow-hidden 
                backdrop-blur-xl 
                bg-white/30 
                border border-white/40 
                shadow-lg 
                rounded-2xl
                hover:shadow-[0_10px_40px_rgba(212,175,160,0.4)]
                transition-all duration-300
              "
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
                <h3 className="font-display text-xl font-medium text-[#b76e79]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ PARAGRAF CLICKABLE */}
        <div className="mt-14 text-center">
          <a
            href="#booking"
            className="
              inline-block 
              text-[#b76e79] 
              font-medium 
              hover:text-[#a85c68] 
              transition 
              underline 
              underline-offset-4
            "
          >
            {t(
              "Për të personalizu menu-të e juaja na kontaktoni",
              "To customize your menus, contact us"
            )}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;