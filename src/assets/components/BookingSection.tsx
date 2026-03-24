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
        ? `Përshëndetje AM Event & Catering! Jam i/e interesuar për një ofertë për eventin tim. Detajet: ${form.name},më datë ${form.date}, ${form.guests} të ftuar, ${form.type}, ${form.message}.`
        : `Hello AM Event & Catering! I am interested in receiving an offer for my event. Details: ${form.name}, date:${form.date}, ${form.guests}guests, ${form.type}, ${form.message}.`;
    const url = `https://wa.me/38343801120?text=${encodeURIComponent(msg)}`;
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
<form onSubmit={handleSubmit} className="glass-card space-y-5 p-8 sm:p-10">

  {/* NAME */}
  <div className="relative">
    <input
      type="text"
      required
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
      className="peer w-full rounded-xl border border-[#E8D8C3]/60 bg-[#E8D8C3]/30 px-4 pt-6 pb-2 font-body text-sm text-[#6F5B4B] placeholder-transparent backdrop-blur-md transition-all focus:border-[#C6A77D] focus:outline-none focus:ring-1 focus:ring-[#C6A77D]/30"
      placeholder=" "
    />
    <label className="absolute left-4 top-2 text-xs text-[#C6A77D] transition-all 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-sm 
      peer-placeholder-shown:text-[#A8907A] 
      peer-focus:top-2 
      peer-focus:text-xs 
      peer-focus:text-[#C6A77D]">
      {t("Emri", "Name")}
    </label>
  </div>

  {/* DATE */}
  <div className="relative">
    <input
      type="date"
      required
      value={form.date}
      onChange={(e) => setForm({ ...form, date: e.target.value })}
      className="w-full rounded-xl border border-[#E8D8C3]/60 bg-[#E8D8C3]/30 px-4 pt-6 pb-2 font-body text-sm text-[#6F5B4B] backdrop-blur-md transition-all focus:border-[#C6A77D] focus:outline-none focus:ring-1 focus:ring-[#C6A77D]/30"
    />
    <label className="absolute left-4 top-2 text-xs text-[#C6A77D]">
      {t("Data e Eventit", "Event Date")}
    </label>
  </div>

  {/* GUESTS */}
  <div className="relative">
    <input
      type="number"
      required
      value={form.guests}
      onChange={(e) => setForm({ ...form, guests: e.target.value })}
      className="peer w-full rounded-xl border border-[#E8D8C3]/60 bg-[#E8D8C3]/30 px-4 pt-6 pb-2 font-body text-sm text-[#6F5B4B] placeholder-transparent backdrop-blur-md transition-all focus:border-[#C6A77D] focus:outline-none focus:ring-1 focus:ring-[#C6A77D]/30"
      placeholder=" "
    />
    <label className="absolute left-4 top-2 text-xs text-[#C6A77D] transition-all 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-sm 
      peer-placeholder-shown:text-[#A8907A] 
      peer-focus:top-2 
      peer-focus:text-xs">
      {t("Numri i të Ftuarve", "Number of Guests")}
    </label>
  </div>

  {/* TYPE */}
  <div className="relative">
    <select
      required
      value={form.type}
      onChange={(e) => setForm({ ...form, type: e.target.value })}
      className="w-full rounded-xl border border-[#E8D8C3]/60 bg-[#E8D8C3]/30 px-4 pt-6 pb-2 font-body text-sm text-[#6F5B4B] backdrop-blur-md transition-all focus:border-[#C6A77D] focus:outline-none focus:ring-1 focus:ring-[#C6A77D]/30"
    >
      <option value="">{t("Lloji i Eventit", "Event Type")}</option>
      <option>{t("Dasmë", "Wedding")}</option>
      <option>{t("Fejesa", "Engagement")}</option>
      <option>{t("Event Korporativ", "Corporate Event")}</option>
      <option>{t("Festë Private", "Private Party")}</option>
    </select>
    <label className="absolute left-4 top-2 text-xs text-[#C6A77D]">
      {t("Lloji i Eventit", "Event Type")}
    </label>
  </div>

  {/* MESSAGE */}
  <div className="relative">
    <textarea
      rows={4}
      value={form.message}
      onChange={(e) => setForm({ ...form, message: e.target.value })}
      className="peer w-full rounded-xl border border-[#E8D8C3]/60 bg-[#E8D8C3]/30 px-4 pt-6 pb-2 font-body text-sm text-[#6F5B4B] placeholder-transparent backdrop-blur-md transition-all focus:border-[#C6A77D] focus:outline-none focus:ring-1 focus:ring-[#C6A77D]/30 resize-none"
      placeholder=" "
    />
    <label className="absolute left-4 top-2 text-xs text-[#C6A77D] transition-all 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-sm 
      peer-placeholder-shown:text-[#A8907A] 
      peer-focus:top-2 
      peer-focus:text-xs">
      {t("Mesazh", "Message")}
    </label>
  </div>

  {/* BUTTON */}
  <button
    type="submit"
    className="w-full rounded-full bg-[#C6A77D] py-3.5 font-body text-sm font-medium tracking-widest uppercase text-white transition-all hover:scale-[1.02] hover:bg-[#B8966F] active:scale-[0.97]"
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
