import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Moon, Sun } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLang } from "./context/LanguageContext";

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const links = [
    { href: "#home", label: t("Kryefaqja", "Home") },
    { href: "#services", label: t("Shërbimet", "Services") },
    { href: "#menu", label: t("Menu", "Menu") },
    { href: "#gallery", label: t("Galeria", "Gallery") },
    { href: "#booking", label: t("Rezervoni", "Booking") },
    { href: "#contact", label: t("Kontakti", "Contact") },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav top-0 shadow-sm" : "top-[40px] bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="AM Event & Catering" className="h-24 w-auto rounded-sm" />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body px-3 py-1 text-s font-semibold tracking-widest transition-colors
              ${scrolled ? "text-[#B8956A]" : "text-[#E5D3B3]"}
              hover:text-[#D6BFA7]`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "al" ? "en" : "al")}
            className={`font-body rounded-full border px-3 py-1 text-xs font-semibold tracking-widest transition-colors
            border-[#CBB79C]
            ${scrolled ? "text-[#B8956A]" : "text-[#E5D3B3]"}
            hover:bg-[#CBB79C] hover:text-white`}
          >
            {lang === "al" ? "EN" : "AL"}
          </button>

          <button
            onClick={() => setDark(!dark)}
            className={`font-body px-3 py-1 text-s font-semibold tracking-widest transition-colors
            ${scrolled ? "text-[#B8956A]" : "text-[#E5D3B3]"}
            hover:text-white`}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="https://wa.me/38343801120"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-body px-3 py-1 text-s font-semibold tracking-widest transition-colors
            ${scrolled ? "text-[#B8956A]" : "text-[#E5D3B3]"}
            hover:text-white`}
            aria-label="WhatsApp"
          >
            <MessageCircle size={16} />
          </a>

          <button
            className={`lg:hidden rounded-full p-2
            ${scrolled ? "text-[#B8956A]" : "text-[#E5D3B3]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="glass-nav border-t border-[#D6BFA7] px-6 py-6 lg:hidden bg-[#F8F3ED]">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-base font-medium text-[#B8956A] transition-colors hover:text-[#8C6A4A]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;