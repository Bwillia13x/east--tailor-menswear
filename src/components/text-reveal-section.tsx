"use client";

import { TextReveal } from "@/components/magicui/text-reveal";
import Image from "next/image";
import { motion } from "motion/react";

export function TextRevealSection() {
  return (
    <section className="relative bg-gradient-to-b from-[var(--color-navy)] via-[#0A1520] to-[var(--color-navy)] overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0a6d0e65-00af-4c2d-b3da-a1ffa32c4565/generated_images/lifestyle-fashion-photography-of-a-confi-a8aff00e-20251019183818.jpg"
          alt="Modern Eastern menswear lifestyle"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy)] via-[var(--color-navy)]/95 to-[var(--color-navy)]" />
        
        {/* Floating gold particles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[var(--color-gold)] blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-[var(--color-gold)] blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-[var(--color-gold)] blur-sm"
        />

        {/* Subtle grid overlay */}
        <motion.div
          animate={{
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-gold)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-gold)_1px,transparent_1px)] bg-[size:80px_80px]"
        />
      </div>
      
      <div className="relative z-10">
        <TextReveal>
          Where Eastern court craftsmanship collides with modern architecture. Each stitch is
          mapped with intention, each fabric sourced for legacy, each garment composed to move
          effortlessly through gala evenings and decisive mornings.
        </TextReveal>
      </div>
    </section>
  );
}
