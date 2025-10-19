"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ruler, Scissors, Truck } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: Ruler,
    title: "Private Consultation",
    description:
      "A sartorial advisor maps your lifestyle, calendar, and measurements—virtually or within our flagship suites.",
  },
  {
    number: "02",
    icon: Scissors,
    title: "Crafting Ritual",
    description:
      "Master artisans spend 72+ hours hand-stitching, embroidering, and finishing each garment within heritage ateliers.",
  },
  {
    number: "03",
    icon: Truck,
    title: "White-Glove Delivery",
    description:
      "From final fitting to global delivery, we include lifetime alterations and seasonal garment refresh services.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-[#F0EDE3] to-ivory">
      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-40 -right-20 w-80 h-80 bg-gradient-to-br from-gold/20 to-navy/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 -left-20 w-96 h-96 bg-gradient-to-tr from-navy/10 to-gold/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0a6d0e65-00af-4c2d-b3da-a1ffa32c4565/generated_images/modern-fashion-lookbook-photograph-featu-f8b5519b-20251019183753.jpg?"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-navy/10 to-gold/10 rounded-full border border-navy/20"
          >
            <span className="text-sm font-medium text-navy">Tailoring Ritual</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-navy mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-navy/70 max-w-2xl mx-auto">
            An intimate journey from first sketch to final steaming, orchestrated entirely around you.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line with animation */}
          <motion.div
            className="hidden md:block absolute top-[100px] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative group"
              >
                {/* Animated glow effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-gold/0 via-gold/5 to-navy/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                <div className="relative text-center">
                  {/* Icon container with animation */}
                  <motion.div
                    className="relative inline-flex items-center justify-center w-24 h-24 mb-6 mx-auto"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold/80 to-gold/60 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-navy/5 rounded-2xl blur-md" />
                    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-white to-ivory rounded-2xl shadow-lg">
                      <step.icon className="w-10 h-10 text-navy" />
                    </div>
                    
                    {/* Step number badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.2, type: "spring", stiffness: 200 }}
                    >
                      <span className="text-xs font-bold text-navy">{index + 1}</span>
                    </motion.div>
                  </motion.div>

                  <h3 className="text-2xl font-serif font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-navy/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
