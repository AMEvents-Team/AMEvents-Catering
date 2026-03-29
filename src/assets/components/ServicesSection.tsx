import { useState } from "react";
import brandedChocolates from "@/assets/branded-chocolates.jpeg";
import macaroonsTable from "@/assets/macaroons-table.jpeg";
import canvasEvent from "@/assets/canvas-event.jpeg";
import demo1 from "@/assets/demo1.jpeg";
import demo2 from "@/assets/demo2.jpeg";
import { useLang } from "./context/LanguageContext";
import { useScrollReveal } from "./hooks/useScrollReveal";

const ServicesSection = () => {
  const { t } = useLang();
  const ref = useScrollReveal();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const services = [
    {
      title: t("Catering për Dasma & Fejesa", "Wedding & Engagement Catering"),
      desc: t(
        "Menu të kuruara me elegancë për ditën tuaj më të veçantë.",
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
    <section
      id="services"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#F8F3ED] to-[#F3ECE5]"
    >
      <div ref={ref} className="section-reveal mx-auto max-w-6xl px-6">
        
        {/* TITLE */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-light tracking-[0.12em] text-[#B8956A] sm:text-4xl md:text-5xl text-balance">
            {t("Shërbimet Tona", "Our Services")}
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#D6BFA7] to-transparent" />
        </div>

        {/* SERVICES */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="group flex flex-col items-center rounded-3xl border border-white/30 bg-white/40 backdrop-blur-md p-8 text-center shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className="mb-6 h-24 w-24 overflow-hidden rounded-full cursor-pointer border-2 border-[#D6BFA7] shadow-md"
                onClick={() => setSelectedImage(s.image)}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="font-display mb-3 text-xl font-medium text-[#B8956A] sm:text-2xl">
                {s.title}
              </h3>

              <p className="font-body text-sm leading-relaxed text-[#7D6A58]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* PREMIUM SECTION */}
        <div className="mt-24 text-center">
          <h3 className="font-display text-2xl sm:text-3xl text-[#b76e79] mb-6">
            {t("Shërbime Premium (Së shpejti)", "Premium Services (Coming Soon)")}
          </h3>

          <div className="mx-auto max-w-5xl rounded-3xl border border-white/30 bg-white/20 backdrop-blur-2xl p-10 shadow-[0_20px_60px_rgba(212,175,160,0.4)] relative overflow-hidden">
            
            {/* glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#d4af9a]/30 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#b76e79]/20 blur-3xl rounded-full"></div>

            <p className="text-[#7D6A58] leading-relaxed mb-10 relative z-10">
              {t(
                "Së shpejti sjellim një eksperiencë krejtësisht të re për eventet tuaja: ftesa digjitale elegante dhe një sistem unik ku mysafirët munden të skanojnë QR code gjatë eventit për të bërë foto. Të gjitha fotot mblidhen automatikisht dhe krijojnë një album digjital të përbashkët për kujtime të paharruara.",
                "Coming soon: a completely new event experience – elegant digital invitations and a unique system where guests can scan a QR code during the event to capture photos. All photos are automatically collected into a shared digital album of unforgettable memories."
              )}
            </p>

            {/* DEMO CARDS */}
            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              
              <div
                onClick={() => setSelectedDemo(demo1)}
                className="cursor-pointer rounded-2xl overflow-hidden border border-white/40 bg-white/30 backdrop-blur-xl shadow-lg hover:shadow-[0_10px_40px_rgba(212,175,160,0.4)] transition flex flex-col"
              >
                <div className="h-64 flex items-center justify-center bg-white/20">
                  <img
                    src={demo1}
                    alt="Digital invitation"
                    className="max-h-full max-w-full object-contain p-4 transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-4 text-[#B8956A] font-medium text-center">
                  Digital Invitations
                </div>
              </div>

              <div
                onClick={() => setSelectedDemo(demo2)}
                className="cursor-pointer rounded-2xl overflow-hidden border border-white/40 bg-white/30 backdrop-blur-xl shadow-lg hover:shadow-[0_10px_40px_rgba(212,175,160,0.4)] transition flex flex-col"
              >
                <div className="h-64 flex items-center justify-center bg-white/20">
                  <img
                    src={demo2}
                    alt="QR album"
                    className="max-h-full max-w-full object-contain p-4 transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-4 text-[#B8956A] font-medium text-center">
                  QR Photo Album
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* IMAGE MODAL (SERVICES) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl rounded-3xl overflow-hidden border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[80vh] w-full object-contain p-4"
            />
          </div>
        </div>
      )}

      {/* MODAL (PREMIUM DEMO) */}
      {selectedDemo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
          onClick={() => setSelectedDemo(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-white/30 bg-white/10 backdrop-blur-2xl shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedDemo}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain p-6"
            />

            <button
              onClick={() => setSelectedDemo(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full px-3 py-1 backdrop-blur-md"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;