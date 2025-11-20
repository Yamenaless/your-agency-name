"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    key: "expertise",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    key: "results",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    key: "support",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    key: "innovation",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    gradient: "from-orange-600 to-yellow-600",
  },
];

export function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="whyChooseUs"
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              {t("subtitle")}
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Static gradient border on hover */}
              <div
                className={cn(
                  "absolute -inset-0.5 rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500",
                  `bg-gradient-to-r ${feature.gradient}`
                )}
              />

              <div className="relative h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transform-gpu">
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={feature.image}
                      alt={t(`features.${feature.key}.title`)}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent" />
                  
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                      `bg-gradient-to-br ${feature.gradient}`
                    )}
                  />

                  {/* Floating icon badge */}
                  <motion.div
                    className={cn(
                      "absolute top-4 right-4 w-14 h-14 rounded-xl flex items-center justify-center shadow-2xl",
                      `bg-gradient-to-br ${feature.gradient}`
                    )}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-lg" />
                  </motion.div>

                  {/* Glow behind icon */}
                  <motion.div
                    className={cn(
                      "absolute top-4 right-4 w-14 h-14 rounded-xl blur-xl opacity-50",
                      `bg-gradient-to-br ${feature.gradient}`
                    )}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <div className="p-8 relative z-10">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    {t(`features.${feature.key}.title`)}
                  </motion.h3>
                  <p className="text-white/60 leading-relaxed text-base line-clamp-3">
                    {t(`features.${feature.key}.description`)}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={cn(
                      "absolute bottom-0 left-0 h-1 rounded-full",
                      `bg-gradient-to-r ${feature.gradient}`
                    )}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
