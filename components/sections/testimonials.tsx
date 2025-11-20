"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quoteKey: "quote1",
    clientKey: "client1",
    rating: 5,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    quoteKey: "quote2",
    clientKey: "client2",
    rating: 5,
    gradient: "from-purple-600 to-pink-600",
  },
  {
    quoteKey: "quote3",
    clientKey: "client3",
    rating: 5,
    gradient: "from-green-600 to-emerald-600",
  },
  {
    quoteKey: "quote4",
    clientKey: "client4",
    rating: 5,
    gradient: "from-orange-600 to-red-600",
  },
  {
    quoteKey: "quote5",
    clientKey: "client5",
    rating: 5,
    gradient: "from-indigo-600 to-blue-600",
  },
];

export function Testimonials() {
  const t = useTranslations("testimonials");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
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
      id="testimonials"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-900" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            {t("title")}
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={cn(
                "group relative",
                i === 0 && "md:col-span-2 md:row-span-2"
              )}
            >
              {/* Static gradient border on hover */}
              <div
                className={cn(
                  "absolute -inset-0.5 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500",
                  `bg-gradient-to-r ${testimonial.gradient}`
                )}
              />

              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden transform-gpu">
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />

                {/* Gradient overlay */}
                <motion.div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                    `bg-gradient-to-br ${testimonial.gradient}`
                  )}
                />

                {/* Stars with stagger animation */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.5 + idx * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{ 
                        scale: 1.3,
                        rotate: [0, -10, 10, 0],
                      }}
                    >
                      <Star className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B] drop-shadow-lg" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <motion.p
                  className={cn(
                    "text-white/80 leading-relaxed mb-8 relative z-10",
                    i === 0 ? "text-xl md:text-2xl" : "text-base md:text-lg"
                  )}
                  whileHover={{ x: 4 }}
                >
                  <span className="absolute -top-2 -right-2 text-6xl text-blue-500/20 font-serif leading-none">
                    &ldquo;
                  </span>
                  <span className="relative z-10">{t(testimonial.quoteKey)}</span>
                  <span className="absolute -bottom-4 -left-2 text-6xl text-blue-500/20 font-serif leading-none">
                    &rdquo;
                  </span>
                </motion.p>

                {/* Customer Info */}
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={cn(
                      "w-12 h-12 md:w-14 md:h-14 rounded-full p-0.5",
                      `bg-gradient-to-br ${testimonial.gradient}`
                    )}>
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {t(`${testimonial.clientKey}.name`)[0]}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  <div>
                    <div className="text-white font-semibold text-base md:text-lg">
                      {t(`${testimonial.clientKey}.name`)}
                    </div>
                    <div className="text-white/50 text-sm md:text-base">
                      {t(`${testimonial.clientKey}.company`)}
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <motion.div
                  className={cn(
                    "absolute bottom-0 left-0 h-1 rounded-full",
                    `bg-gradient-to-r ${testimonial.gradient}`
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
