"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      title: t("mission.title"),
      description: t("mission.description"),
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      gradient: "from-blue-600 to-cyan-600",
      delay: 0,
    },
    {
      title: t("vision.title"),
      description: t("vision.description"),
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      gradient: "from-purple-600 to-pink-600",
      delay: 0.2,
    },
    {
      title: t("values.title"),
      description: t("values.description"),
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      gradient: "from-orange-600 to-red-600",
      delay: 0.4,
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
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
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: card.delay }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Static gradient border on hover */}
              <div
                className={cn(
                  "absolute -inset-0.5 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500",
                  `bg-gradient-to-r ${card.gradient}`
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

                {/* Card Image */}
                <div className="relative h-72 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent" />
                  
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                      `bg-gradient-to-br ${card.gradient}`
                    )}
                  />
                </div>

                {/* Card Content */}
                <div className="p-8 md:p-10 relative z-10">
                  {/* Icon indicator */}
                  <motion.div
                    className={cn(
                      "w-12 h-12 rounded-xl mb-6 flex items-center justify-center",
                      `bg-gradient-to-br ${card.gradient}`
                    )}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-lg" />
                  </motion.div>

                  <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-4 text-white"
                    whileHover={{ x: 4 }}
                  >
                    {card.title}
                  </motion.h3>
                  <p className="text-white/60 leading-relaxed text-lg">
                    {card.description}
                  </p>

                  {/* Bottom accent */}
                  <motion.div
                    className={cn(
                      "absolute bottom-0 left-0 h-1 rounded-full",
                      `bg-gradient-to-r ${card.gradient}`
                    )}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
