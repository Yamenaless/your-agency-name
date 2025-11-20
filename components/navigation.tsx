"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/routing";
import { scrollToElement } from "@/lib/lenis";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "hero", translationKey: "home" },
  { key: "about", translationKey: "about" },
  { key: "services", translationKey: "services" },
  { key: "whyChooseUs", translationKey: "whyChooseUs" },
  { key: "testimonials", translationKey: "testimonials" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    scrollToElement(sectionId, { offset: 80 });
    setIsMobileMenuOpen(false);
  };

  const switchLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "backdrop-blur-md bg-slate-900/80 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <motion.div
            className="text-2xl md:text-3xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={() => scrollToSection("hero")}>
              MarkLab
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="text-sm font-semibold text-white/80 hover:text-white transition-colors relative group"
              >
                {t(item.translationKey)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Language Switch & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={switchLocale}
              className="px-4 py-2 rounded-xl glass border border-white/10 hover:bg-white/5 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              aria-label="Switch language"
            >
              <Languages className="w-4 h-4 text-white/80" />
              <span className="text-sm font-semibold text-white/80 uppercase">
                {locale === "ar" ? "EN" : "AR"}
              </span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl glass border border-white/10 hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-white/10 backdrop-blur-xl bg-slate-900/95"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto max-w-container px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={cn(
                    "block w-full py-3 text-white/80 hover:text-white transition-colors font-semibold",
                    locale === "ar" ? "text-right" : "text-left"
                  )}
                >
                  {t(item.translationKey)}
                </button>
              ))}
              <button
                onClick={switchLocale}
                className={cn(
                  "block w-full py-3 text-white/80 hover:text-white transition-colors font-semibold flex items-center gap-2",
                  locale === "ar" ? "justify-end" : "justify-start"
                )}
              >
                <Languages className="w-4 h-4" />
                <span className="uppercase">{locale === "ar" ? "EN" : "AR"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
