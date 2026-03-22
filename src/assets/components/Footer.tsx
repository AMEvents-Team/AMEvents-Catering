import logo from "@/assets/logo.jpeg";
import { useLang } from "./context/LanguageContext";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center text-center">
        <img src={logo} alt="AM Event & Catering" className="h-16 w-auto rounded-sm mb-4" />
        <p className="font-body mt-3 text-xs text-muted-foreground">
          © {new Date().getFullYear()} AM Event & Catering. {t("Të gjitha të drejtat e rezervuara.", "All rights reserved.")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
