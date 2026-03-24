import { useLang } from "./context/LanguageContext";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1
          className="font-display text-4xl font-light leading-[1.1] tracking-wide text-[#E8D8C8] sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.2s" }}
        >
          AM Event & Catering
        </h1>

        <div className="my-6 h-px w-24 bg-[#D6BFA7]" />

        <p
          className="font-display max-w-2xl text-lg font-light italic leading-relaxed  text-[#E8D8C8] sm:text-xl md:text-2xl"
          style={{ animationDelay: "0.5s" }}
        >
          {t(
            "Ku shija takohet me elegancën",
            "Where Taste Meets Elegance"
          )}
        </p>

        <p
          className="font-display mt-4 max-w-lg text-sm font-light tracking-wide text-[#E8D8C8] sm:text-base"
          style={{ animationDelay: "0.7s" }}
        >
          {t(
            "Shërbime premium për evente që mbesin gjatë në kujtesë.",
            "Premium catering and event styling for unforgettable moments."
          )}
        </p>

        <div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href="#booking"
            className="rose-gold-glow rounded-full bg-[#B8956A] px-8 py-3.5 font-body text-sm font-medium tracking-widest uppercase text-[#E8D8C8] transition-all duration-300 hover:bg-[#D6BFA7] hover:scale-[1.03] active:scale-[0.97]"
          >
            {t("Rezervoni Tani", "Book Now")}
          </a>

          <a
            href="#services"
            className="rounded-full border border-[#D6BFA7] px-8 py-3.5 font-body text-sm font-medium tracking-widest uppercase text-[#F8F3ED] transition-all duration-300 hover:bg-[#D6BFA7]/20 hover:scale-[1.03] active:scale-[0.97]"
          >
            {t("Shiko Shërbimet", "Explore Services")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;