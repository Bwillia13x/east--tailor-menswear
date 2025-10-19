"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function NumberTicker({ value }: { value: number }) {
  const spring = useSpring(0, { duration: 2, bounce: 0 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

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
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-ivory via-[#F5F1E8] to-background">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/8 via-transparent to-transparent" />
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gold/12 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-navy/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(196,165,82,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,165,82,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-5 py-2 bg-gradient-to-r from-gold/15 to-gold/5 rounded-full border border-gold/30 shadow-luxury backdrop-blur-sm"
          >
            <span className="text-sm font-semibold text-navy tracking-wider">OUR LEGACY</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-navy mb-6 tracking-tight">
            A Heritage of{" "}
            <span className="text-gradient-luxury">Excellence</span>
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
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative text-center"
            >
              {/* Enhanced decorative background with glow */}
              <motion.div
                className="absolute -inset-px bg-gradient-to-br from-gold/10 via-gold/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative p-8 rounded-2xl border border-gold/20 bg-white/60 backdrop-blur-md hover-lift hover:border-gold/40 hover:shadow-luxury-lg transition-all duration-500">
                <div className="text-5xl md:text-6xl font-serif font-bold mb-3">
                  {isInView && (
                    <>
                      <NumberTicker value={stat.value} />
                      <span className="text-gradient-gold">{stat.suffix}</span>
                    </>
                  )}
                </div>
                <div className="text-sm md:text-base text-navy/70 font-medium tracking-wide">
                  {stat.label}
                </div>
                {/* Decorative accent */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
