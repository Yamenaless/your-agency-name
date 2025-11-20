"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

export function Stats() {
  const t = useTranslations("stats");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 500, label: t("happyClients"), suffix: "+" },
    { value: 1200, label: t("completedProjects"), suffix: "+" },
    { value: 98, label: t("satisfactionRate"), suffix: "%" },
    { value: 50, label: t("yearsExperience"), suffix: "+" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {isInView ? (
                    <CountUp end={stat.value} duration={3} />
                  ) : (
                    stat.value
                  )}
                  {stat.suffix}
                </span>
              </div>
              <div className="text-white/60 text-lg md:text-xl font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
