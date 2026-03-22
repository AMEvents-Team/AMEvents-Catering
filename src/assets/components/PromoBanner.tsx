import { useLang } from "./context/LanguageContext";

const PromoBanner = () => {
  const { t } = useLang();
  return (
    <div className="relative overflow-hidden bg-primary/90 py-2.5 text-center">
      <div className="shimmer absolute inset-0" />
      <p className="font-body relative z-10 text-sm font-medium tracking-wide text-primary-foreground">
        ✨ {t(
          "Ofertë e limitume: 20% zbritje për 5 rezervimet e para!",
          "Limited Offer: 20% off for the first 5 bookings!"
        )} ✨
      </p>
    </div>
  );
};

export default PromoBanner;
