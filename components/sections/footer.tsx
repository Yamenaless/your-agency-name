"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { scrollToElement } from "@/lib/lenis";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const quickLinks = [
  { key: "hero", translationKey: "home" },
  { key: "about", translationKey: "about" },
  { key: "services", translationKey: "services" },
  { key: "whyChooseUs", translationKey: "whyChooseUs" },
  { key: "testimonials", translationKey: "testimonials" },
];

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId: string) => {
    scrollToElement(sectionId, { offset: 80 });
  };

  return (
    <footer
      ref={ref}
      className="relative border-t border-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              MarkLab
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed text-lg">
              {t("description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-12 h-12 rounded-xl",
                      "glass backdrop-blur-xl border border-white/10",
                      "flex items-center justify-center",
                      "hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-500",
                      "hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                    )}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="w-5 h-5 text-white/80 hover:text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h4 className="text-xl font-bold mb-8 text-white">{t("contact")}</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2 text-white/80">
                    {t("address")}
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {t("addressText")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2 text-white/80">
                    {t("phone")}
                  </p>
                  <a
                    href="tel:+966501234567"
                    className="text-sm text-white/60 hover:text-blue-400 transition-colors"
                  >
                    +966 50 123 4567
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2 text-white/80">
                    {t("email")}
                  </p>
                  <a
                    href="mailto:info@digitalagency.com"
                    className="text-sm text-white/60 hover:text-blue-400 transition-colors"
                  >
                    info@digitalagency.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h4 className="text-xl font-bold mb-8 text-white">{t("quickLinks")}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.key)}
                    className="text-sm text-white/60 hover:text-blue-400 transition-colors text-right w-full font-semibold hover:translate-x-2 transition-transform duration-300"
                  >
                    {tNav(link.translationKey)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h4 className="text-xl font-bold mb-8 text-white">{t("newsletter.title")}</h4>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              {t("newsletter.description")}
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className={cn(
                  "w-full px-5 py-4 rounded-xl",
                  "glass backdrop-blur-xl border border-white/10",
                  "bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900",
                  "text-white placeholder:text-white/40",
                  "transition-all duration-300"
                )}
              />
              <button
                type="submit"
                className={cn(
                  "w-full px-5 py-4 rounded-xl",
                  "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
                  "font-semibold text-base",
                  "hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-500",
                  "hover:scale-[1.02] ring-2 ring-blue-500/20"
                )}
              >
                {t("newsletter.button")}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} MarkLab. {t("copyright")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
