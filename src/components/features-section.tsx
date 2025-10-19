"use client";

import React from "react";
import { Award, Leaf, Ruler } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

export default function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[var(--color-ivory)] via-white to-[var(--color-ivory)]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-gold)]/5 via-transparent to-transparent" />
        <motion.div
          animate={{
            opacity: [0.03, 0.06, 0.03],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-gold)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-gold)_1px,transparent_1px)] bg-[size:64px_64px]"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/30 bg-gradient-to-r from-[var(--color-gold)]/10 to-[var(--color-gold)]/5 mb-4 backdrop-blur-sm"
          >
            <Award className="w-4 h-4 text-[var(--color-gold)]" />
            <span className="text-[var(--color-gold)] text-sm font-medium tracking-wide">Craftsmanship Excellence</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            The Art of Modern Tailoring
          </h2>
          <p className="text-[var(--color-navy)]/70 text-lg max-w-2xl mx-auto">
            Every garment tells a story of heritage, sustainability, and precision craftsmanship
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Natural Fibers Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-[var(--color-ivory)]/50 border border-[var(--color-gold)]/20 p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-[var(--color-gold)]/40"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative">
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0a6d0e65-00af-4c2d-b3da-a1ffa32c4565/generated_images/macro-close-up-photograph-of-luxurious-n-d6d25793-20251019183745.jpg"
                  alt="Premium natural fabric texture"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[#D4B563] flex items-center justify-center mb-4 shadow-lg"
              >
                <Leaf className="w-6 h-6 text-[var(--color-navy)]" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Natural Fibers
              </h3>
              <p className="text-[var(--color-navy)]/70 leading-relaxed mb-4">
                Premium silk, cotton, and linen sourced from heritage mills. 
                Breathable, sustainable, and crafted to last generations.
              </p>
              <div className="flex items-center gap-2 text-sm text-[var(--color-gold)] font-medium">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block w-2 h-2 rounded-full bg-[var(--color-gold)]"
                />
                GOTS Certified
              </div>
            </div>
          </motion.div>

          {/* Fair Production Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-[var(--color-ivory)]/50 border border-[var(--color-gold)]/20 p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-[var(--color-gold)]/40"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative">
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0a6d0e65-00af-4c2d-b3da-a1ffa32c4565/generated_images/artisan-craftsman-hands-carefully-measur-38a32b81-20251019183809.jpg"
                  alt="Master craftsman at work"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[#D4B563] flex items-center justify-center mb-4 shadow-lg"
              >
                <Award className="w-6 h-6 text-[var(--color-navy)]" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Fair Production
              </h3>
              <p className="text-[var(--color-navy)]/70 leading-relaxed mb-4">
                Every piece handcrafted by master artisans in ethical workshops. 
                Fair wages, safe conditions, and traditional techniques preserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-[var(--color-gold)] font-medium">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="inline-block w-2 h-2 rounded-full bg-[var(--color-gold)]"
                />
                Heritage Mills Verified
              </div>
            </div>
          </motion.div>

          {/* Custom Sizing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-[var(--color-ivory)]/50 border border-[var(--color-gold)]/20 p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-[var(--color-gold)]/40"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative">
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0a6d0e65-00af-4c2d-b3da-a1ffa32c4565/generated_images/professional-fashion-photography-of-prem-26f46566-20251019183801.jpg"
                  alt="Custom tailored garment"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[#D4B563] flex items-center justify-center mb-4 shadow-lg"
              >
                <Ruler className="w-6 h-6 text-[var(--color-navy)]" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Custom Sizing
              </h3>
              <p className="text-[var(--color-navy)]/70 leading-relaxed mb-4">
                Precision measurements and personalized fit. Virtual or in-person consultations 
                for garments tailored exclusively to you.
              </p>
              <Button 
                asChild
                className="mt-2 bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90 text-[var(--color-ivory)] rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <Link href="/custom">Book Fitting</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}