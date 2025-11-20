"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    key: "seo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    icon: "🔍",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    key: "social",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
    icon: "📱",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    key: "content",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
    icon: "✍️",
    gradient: "from-orange-600 to-red-600",
  },
  {
    key: "ads",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    icon: "📢",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    key: "web",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    icon: "🌐",
    gradient: "from-indigo-600 to-blue-600",
  },
  {
    key: "analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    icon: "📊",
    gradient: "from-pink-600 to-rose-600",
  },
];

export function Services() {
  const t = useTranslations("services");
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              {t("badge")}
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mt-6 leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative perspective-1000"
            >
              {/* Static gradient border on hover */}
              <div
                className={cn(
                  "absolute -inset-0.5 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500",
                  `bg-gradient-to-r ${service.gradient}`
                )}
              />

              <div className="relative h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden transform-gpu">
                {/* Animated gradient overlay */}
                <motion.div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    `bg-gradient-to-br ${service.gradient}`
                  )}
                  style={{ opacity: 0 }}
                />

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />

                {/* Service Image */}
                <div className="relative h-56 mb-6 rounded-2xl overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={service.image}
                      alt={t(`${service.key}.title`)}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                  
                  {/* Floating icon badge */}
                  <motion.div
                    className={cn(
                      "absolute top-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-2xl",
                      `bg-gradient-to-br ${service.gradient}`
                    )}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  {/* Glow effect behind icon */}
                  <motion.div
                    className={cn(
                      "absolute top-4 right-4 w-16 h-16 rounded-2xl blur-xl opacity-50",
                      `bg-gradient-to-br ${service.gradient}`
                    )}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    {t(`${service.key}.title`)}
                  </motion.h3>
                  <p className="text-white/60 leading-relaxed mb-6 text-base line-clamp-3">
                    {t(`${service.key}.description`)}
                  </p>

                  {/* Hover Arrow with animation */}
                  <motion.div
                    className="flex items-center gap-2 text-blue-400"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm font-semibold">{t("learnMore")}</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Decorative corner with animation */}
                <motion.div
                  className={cn(
                    "absolute top-0 right-0 w-24 h-24 rounded-bl-3xl",
                    `bg-gradient-to-br ${service.gradient}`
                  )}
                  style={{ opacity: 0.1 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Bottom accent line */}
                <motion.div
                  className={cn(
                    "absolute bottom-0 left-0 h-1 rounded-full",
                    `bg-gradient-to-r ${service.gradient}`
                  )}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
