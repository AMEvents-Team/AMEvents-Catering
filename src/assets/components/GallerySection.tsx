import { useState, useEffect } from "react";
import tableDecor from "@/assets/table-decor.jpeg";
import eventDecor from "@/assets/event-decor.jpeg";
import video1 from "@/assets/gal7.mp4"; 
import gal1 from "@/assets/gal1.jpeg";
import gal2 from "@/assets/gal2.jpeg";
import gal3 from "@/assets/gal3.jpeg";
import gal4 from "@/assets/gal4.jpeg";
import gal5 from "@/assets/gal5.jpeg";
import gal6 from "@/assets/gal6.jpeg";
import gal8 from "@/assets/gal8.jpeg";
import gal9 from "@/assets/gal9.jpeg";
import gal10 from "@/assets/gal10.jpeg";
import gal11 from "@/assets/gal11.jpeg";
import gal12 from "@/assets/gal12.jpeg";
import { useLang } from "./context/LanguageContext";
import { useScrollReveal } from "./hooks/useScrollReveal";

const GallerySection = () => {
  const { t } = useLang();
  const ref = useScrollReveal();

  // ✅ MIX foto + video
  const items = [
    { type: "image", src: tableDecor },
    { type: "image", src: eventDecor },
    { type: "video", src: video1 },
        { type: "image", src: gal1 },
    { type: "image", src: gal2 },
    { type: "image", src: gal3 },
    { type: "image", src: gal4 },
    { type: "image", src: gal5 },
    { type: "image", src: gal6 },
    { type: "image", src: gal8 },
    { type: "image", src: gal9 },
    { type: "image", src: gal10 },
    { type: "image", src: gal11 },
    { type: "image", src: gal12 },

  
  ];

  const [current, setCurrent] = useState(0);

  // ✅ AUTO SLIDE SMOOTH
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === items.length - 1 ? 0 : prev + 1
      );
    }, 4500); // pak ma smooth

    return () => clearInterval(interval);
  }, [items.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#F8F3ED] to-[#F3ECE5]"
    >
      <div ref={ref} className="section-reveal mx-auto max-w-6xl px-6">
        {/* TITLE */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-light tracking-wide  text-[#B8956A] sm:text-4xl md:text-5xl text-balance">
            {t(
              "Dekorime të personalizueme për çdo event",
              "Personalized styling for every event"
            )}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-[#d4af9a]/60" />
        </div>

        {/* ✅ CAROUSEL */}
        <div className="relative flex items-center justify-center">
          <div
            className="
              w-full max-w-md
              backdrop-blur-xl 
              bg-white/20 
              border border-white/30 
              shadow-[0_10px_40px_rgba(212,175,160,0.35)]
              rounded-2xl 
              overflow-hidden
              transition-all duration-700
            "
          >
            {/* ✅ IMAGE / VIDEO SWITCH */}
            {items[current].type === "image" ? (
              <img
                src={items[current].src}
                alt="Event"
                className="aspect-[3/4] w-full object-cover transition-all duration-700 ease-in-out"
              />
            ) : (
              <video
                src={items[current].src}
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[3/4] w-full object-cover"
              />
            )}
          </div>

          {/* ⬅️ LEFT */}
          <button
            onClick={prevSlide}
            className="
              absolute left-2 
              bg-white/30 
              backdrop-blur-md 
               text-[#B8956A] 
              px-3 py-2 
              rounded-full 
              hover:bg-white/50 
              transition
            "
          >
            ‹
          </button>

          {/* ➡️ RIGHT */}
          <button
            onClick={nextSlide}
            className="
              absolute right-2 
              bg-white/30 
              backdrop-blur-md 
              text-[#b76e79] 
              px-3 py-2 
              rounded-full 
              hover:bg-white/50 
              transition
            "
          >
            ›
          </button>
        </div>

        {/* ✅ DOTS */}
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`
                h-2 w-2 rounded-full cursor-pointer transition
                ${i === current ? "bg-[#b76e79]" : "bg-[#d4af9a]/40"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;