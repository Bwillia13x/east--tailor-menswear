"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: 150, suffix: "+", label: "Years of Heritage" },
    { value: 50000, suffix: "+", label: "Satisfied Customers" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" },
    { value: 100, suffix: "%", label: "Natural Materials" },
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
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-ivory via-[#F5F1E8] to-background">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-navy/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full border border-gold/30"
          >
            <span className="text-sm font-medium text-navy">Our Legacy</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-4">
            A Heritage of Excellence
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative text-center"
            >
              {/* Decorative background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold/5 to-navy/5 rounded-2xl blur-xl"
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative p-6 rounded-xl border border-gold/20 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10">
                <div className="text-4xl md:text-5xl font-serif font-bold text-navy mb-2">
                  {isInView && (
                    <>
                      <NumberTicker value={stat.value} />
                      <span className="text-gold">{stat.suffix}</span>
                    </>
                  )}
                </div>
                <div className="text-sm md:text-base text-navy/70 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}