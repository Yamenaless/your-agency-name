"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, Award, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { scrollToElement } from "@/lib/lenis";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useTranslations("hero");
  const tStats = useTranslations("stats");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const stats = [
    { value: 500, label: tStats("happyClients"), icon: Users },
    { value: 1200, label: tStats("completedProjects"), icon: TrendingUp },
    { value: 98, label: tStats("satisfactionRate"), icon: Award },
    { value: 10, label: tStats("yearsExperience"), icon: Zap },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
    >
      {/* Static Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="noise-texture absolute inset-0" />
      
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 mb-8 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/90 font-medium">
              {t("badge")}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
          >
            <span className="block text-white mb-2">
              {t("headline1")}
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("headline2")}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.button
              onClick={() => scrollToElement("services", { offset: 80 })}
              className="group relative px-8 py-4 rounded-full overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-semibold text-white text-base md:text-lg flex items-center gap-2">
                {t("ctaPrimary")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToElement("about", { offset: 80 })}
              className="group px-8 py-4 rounded-full border-2 border-white/20 glass backdrop-blur-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-semibold text-base md:text-lg">
                {t("ctaSecondary")}
              </span>
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="glass border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {isClient ? (
                        <CountUp end={stat.value} duration={2.5} />
                      ) : (
                        stat.value
                      )}
                      {stat.value === 98 ? "%" : "+"}
                    </span>
                  </div>
                  <div className="text-white/60 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2 glass backdrop-blur-xl">
          <motion.div
            className="w-1.5 h-2 bg-white/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
