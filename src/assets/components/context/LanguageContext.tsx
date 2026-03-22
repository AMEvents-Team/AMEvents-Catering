import { createContext, useState, useContext, type ReactNode } from "react";

export type Lang = "al" | "en";

export interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (al: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("al");

  const t = (al: string, en: string) => (lang === "al" ? al : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ hook këtu
export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};