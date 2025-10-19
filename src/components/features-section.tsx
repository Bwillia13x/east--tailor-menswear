"use client";

import React from "react";
import { Award, Leaf, Ruler } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

export default function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[var(--color-ivory)] via-white to-[var(--color-ivory)] overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-gold)]/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[var(--color-navy)]/3 via-transparent to-transparent" />
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
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--color-navy)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Enhanced section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--color-gold)]/30 bg-gradient-to-r from-[var(--color-gold)]/10 via-[var(--color-gold)]/5 to-transparent backdrop-blur-md mb-6 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group cursor-default"
          >
            <Award className="w-4 h-4 text-[var(--color-gold)] group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-gradient-gold text-sm font-semibold tracking-wider">CRAFTSMANSHIP EXCELLENCE</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-semibold text-[var(--color-navy)] mb-6 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            The Art of{" "}
            <span className="text-gradient-luxury">Modern Tailoring</span>
          </h2>
          <p className="text-[var(--color-navy)]/70 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Three pillars shape every commission: rare materials, time-honoured ateliers,
            and an obsessive pursuit of silhouette perfection.
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
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-[var(--color-ivory)]/50 border border-[var(--color-gold)]/20 p-8 hover-lift hover:shadow-luxury-lg hover:border-[var(--color-gold)]/40 transition-all duration-500"
          >
            {/* Animated background glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-[var(--color-gold)]/0 via-[var(--color-gold)]/5 to-[var(--color-gold)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
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
              <div className="mb-6 overflow-hidden rounded-xl ring-1 ring-[var(--color-gold)]/10 group-hover:ring-[var(--color-gold)]/20 transition-all duration-500">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0a6d0e65-00af-4c2d-b3da-a1ffa32c4565/generated_images/macro-close-up-photograph-of-luxurious-n-d6d25793-20251019183745.jpg"
                  alt="Premium natural fabric texture"
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                />
              </div>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-gold)] via-[#E8D499] to-[#D4B563] flex items-center justify-center mb-5 shadow-luxury group-hover:shadow-luxury-lg transition-all duration-500"
              >
                <Leaf className="w-7 h-7 text-[var(--color-navy)]" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-3 group-hover:text-gradient-gold transition-all duration-300" style={{ fontFamily: 'var(--font-serif)' }}>
                Nature-luxe textiles
              </h3>
              <p className="text-[var(--color-navy)]/70 leading-relaxed mb-5 font-light">
                Traceable mulberry silk, regenerative cotton, and Himalayan wool
                woven exclusively for East & Tailor.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-navy)]/70">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                  Certified GOTS & OEKO-TEX dye processes
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                  Exclusive mill partnerships across Varanasi & Como
                </li>
              </ul>
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
                Heritage ateliers
              </h3>
              <p className="text-[var(--color-navy)]/70 leading-relaxed mb-4">
                Bespoke pieces finished by fourth-generation artisans within
                family-run ateliers across Jaipur, Mumbai, and Seoul.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-navy)]/70">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                  Ethical workshops audited twice yearly
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                  Techniques preserved from court tailors & royal houses
                </li>
              </ul>
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
                Tailor-led precision
              </h3>
              <p className="text-[var(--color-navy)]/70 leading-relaxed mb-4">
                Private fittings, digital body mapping, and pattern archives ensure
                every commission drapes flawlessly season after season.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-[var(--color-navy)]/70">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                  Virtual tailoring kits shipped globally
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                  Pattern library saved for rapid re-orders
                </li>
              </ul>
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
