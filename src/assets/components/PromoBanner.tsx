import { useLang } from "./context/LanguageContext";

const PromoBanner = () => {
  const { t } = useLang();

  return (
    <div className="relative overflow-hidden bg-[#C6A77D] py-2 sm:py-3 text-center">

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40 animate-[shimmer_3s_linear_infinite]" />

      <p className="relative z-10 px-4 font-body text-xs sm:text-sm font-medium tracking-wide text-white">
        ✨{" "}
        {t(
          "Ofertë e limitume: 20% zbritje për 5 rezervimet e para!",
          "Limited Offer: 20% off for the first 5 bookings!"
        )}{" "}
        ✨
      </p>
    </div>
  );
};

export default PromoBanner;

