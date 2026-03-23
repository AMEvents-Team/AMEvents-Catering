import { useState } from "react";
import { useLang } from "../components/context/LanguageContext";
import { useScrollReveal } from "../components/hooks/useScrollReveal";

const BookingSection = () => {
  const { lang, t } = useLang();
  const ref = useScrollReveal();
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    date: "",
    guests: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      lang === "al"
        ? `Përshëndetje AM Event & Catering! Jam i/e interesuar për një ofertë për eventin tim. Detajet: ${form.name}, ${form.date}, ${form.guests}, ${form.type}, ${form.message}.`
        : `Hello AM Event & Catering! I am interested in receiving an offer for my event. Details: ${form.name}, ${form.date}, ${form.guests}, ${form.type}, ${form.message}.`;
    const url = `https://wa.me/38348801120?text=${encodeURIComponent(msg)}`;
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30";

  return (
    <section id="booking" className="bg-white py-24 sm:py-32">
  <div ref={ref} className="section-reveal mx-auto max-w-2xl px-6">
    
    {/* TITLE */}
    <div className="mb-12 text-center">
      <h2 className="font-display text-3xl font-light tracking-wide text-[#B8956A] sm:text-4xl md:text-5xl text-balance">
        {t("Rezervo Eventin Tënd", "Book Your Event")}
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#D6BFA7] to-transparent" />
    </div>

    {/* FORM CARD */}
    <form
      onSubmit={handleSubmit}
      className="space-y-5 p-8 sm:p-10 rounded-3xl border border-[#E8D8C3] bg-[#E8D8C3]/20 backdrop-blur-xl shadow-lg"
    >
      <input
        type="text"
        placeholder={t("Emri", "Name")}
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputClass}
      />

      <input
        type="date"
        required
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className={inputClass}
      />

      <input
        type="number"
        placeholder={t("Numri i të Ftuarve", "Number of Guests")}
        required
        value={form.guests}
        onChange={(e) => setForm({ ...form, guests: e.target.value })}
        className={inputClass}
      />

      <select
        required
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className={inputClass}
      >
        <option value="">
          {t("Lloji i Eventit", "Event Type")}
        </option>
        <option>{t("Dasmë", "Wedding")}</option>
        <option>{t("Fejesa", "Engagement")}</option>
        <option>{t("Event Korporativ", "Corporate Event")}</option>
        <option>{t("Festë Private", "Private Party")}</option>
        <option>{t("Dekore-Dhurata", "Decor-Gifts")}</option>

      </select>

      <textarea
        placeholder={t("Mesazh", "Message")}
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={inputClass + " resize-none"}
      />

      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-[#B8956A] to-[#b76e79] py-3.5 font-body text-sm font-medium tracking-widest uppercase text-white transition-all hover:scale-[1.02] active:scale-[0.97] shadow-md hover:shadow-lg"
      >
        {t("Dërgo Kërkesën", "Send Request")}
      </button>
    </form>

    {/* SUCCESS MODAL */}
    {showSuccess && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="rounded-3xl border border-white/30 bg-white/90 backdrop-blur-xl shadow-2xl mx-4 max-w-md animate-fade-up p-10 text-center">
          <div className="mb-4 text-4xl">✨</div>

          <h3 className="font-display mb-2 text-2xl font-medium text-[#B8956A]">
            {t("Faleminderit që na zgjodhët!", "Thank you!")}
          </h3>

          <p className="font-body text-sm text-[#7D6A58]">
            {t(
              "Kërkesa u dërgu me sukses.",
              "Your request has been successfully sent."
            )}
          </p>

          <button
            onClick={() => setShowSuccess(false)}
            className="mt-6 rounded-full bg-gradient-to-r from-[#B8956A] to-[#b76e79] px-6 py-2 font-body text-sm text-white transition-all hover:scale-[1.03] active:scale-[0.97]"
          >
            OK
          </button>
        </div>
      </div>
    )}
  </div>
</section>
  );
};

export default BookingSection;
