"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const highlights = [
  {
    icon: Sparkles,
    title: "Sartorial concierge",
    copy: "Private stylists curate edits for ceremonies, boardrooms, and every journey in between.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime aftercare",
    copy: "Complimentary refits, pressing, and restoration keep every piece immaculate for decades.",
  },
  {
    icon: MapPin,
    title: "Global ateliers",
    copy: "Flagship houses in Singapore, London, and Dubai with travelling trunk shows on request.",
  },
];

const pressMentions = [
  "GQ Asia",
  "Esquire",
  "Monocle",
  "Vogue Man",
  "Robb Report",
  "Financial Times",
  "Tatler",
  "Gentleman's Journal",
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24">
            {/* Enhanced background with multiple layers */}
            <div className="absolute inset-0 -z-10 size-full bg-[var(--color-navy)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[#0A1520] to-[#050A12] opacity-95" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-gold)]/10 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[var(--color-gold)]/5 via-transparent to-transparent" />

              {/* Animated gradient orbs */}
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-3xl animate-glow" />
              <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[var(--color-gold)]/5 rounded-full blur-3xl animate-glow animation-delay-2s" />

              {/* Subtle grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(196,165,82,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,165,82,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                {/* Premium badge with shimmer effect */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--color-gold)]/30 bg-gradient-to-r from-[var(--color-gold)]/10 via-[var(--color-gold)]/5 to-transparent backdrop-blur-md mb-8 animate-fade-in hover:border-[var(--color-gold)]/50 transition-all duration-500 shadow-luxury group cursor-default">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-gold)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-gold)] shadow-lg shadow-[var(--color-gold)]/50"></span>
                  </span>
                  <span className="text-gradient-gold text-sm font-semibold tracking-wider">EST. 1875 — 150 YEARS OF HERITAGE</span>
                </div>

                <div
                  className="mt-2 max-w-3xl text-5xl font-bold text-white tracking-tight leading-[1.05] md:text-7xl lg:mt-4 lg:text-8xl font-serif drop-shadow-2xl"
                >
                  <TextEffect
                    as="span"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    className="inline text-white"
                  >
                    Eastern heritage, tailored for
                  </TextEffect>
                  {" "}
                  <TextEffect
                    as="span"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={0.05}
                    className="text-gradient-luxury inline-block font-bold"
                  >
                    modern icons.
                  </TextEffect>
                </div>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mt-8 max-w-2xl text-pretty text-white/90 text-xl leading-relaxed font-normal"
                >
                  Bespoke wardrobes for modern tastemakers. Every silhouette is cut from
                  regenerative natural fibres, finished by master artisans, and styled to
                  honour tradition while commanding the present.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.6,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
                >
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-2xl border border-[var(--color-gold)]/20 bg-[var(--color-navy)]/30 px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/50 hover:shadow-luxury"
                    >
                      <div className="absolute -top-12 right-0 h-24 w-24 rounded-full bg-[var(--color-gold)]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
                      <item.icon className="mb-3 h-6 w-6 text-[var(--color-gold)]" />
                      <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/85 font-medium">
                        {item.copy}
                      </p>
                    </div>
                  ))}
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-wrap items-center gap-4"
                >
                  <div
                    key={1}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-gold)] via-[#E8D499] to-[var(--color-gold)] rounded-[calc(var(--radius-xl)+0.25rem)] opacity-75 group-hover:opacity-100 blur-lg transition duration-500 animate-gradient" />
                    <Button
                      asChild
                      size="lg"
                      className="relative rounded-xl px-10 py-7 text-base bg-[var(--color-gold)] hover:bg-[#D4B563] text-[var(--color-navy)] font-bold shadow-luxury-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <Link href="/shop">
                        <span className="text-nowrap tracking-wide">Shop New Arrivals</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-14 rounded-xl px-10 text-base text-[var(--color-ivory)] hover:bg-[var(--color-ivory)]/10 font-semibold border-2 border-[var(--color-ivory)]/30 hover:border-[var(--color-gold)]/50 transition-all duration-300 backdrop-blur-sm shadow-luxury"
                  >
                    <Link href="/custom">
                      <span className="text-nowrap">Book Fitting</span>
                    </Link>
                  </Button>
                </AnimatedGroup>

                {/* Enhanced trust indicators */}
                <div className="mt-16 flex flex-wrap items-center gap-8 text-white/80 text-sm animate-fade-in animation-delay-1s">
                  <div className="flex items-center gap-3 group">
                    <div className="flex -space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-5 h-5 text-[var(--color-gold)] drop-shadow-lg transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-semibold text-white">4.9</span>
                    <span className="font-medium">from 2,100+ reviews</span>
                  </div>
                  <div className="h-5 w-px bg-[var(--color-ivory)]/20" />
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Free worldwide shipping</span>
                  </div>
                  <div className="h-5 w-px bg-[var(--color-ivory)]/20" />
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-medium">Lifetime guarantee</span>
                  </div>
                </div>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-20 overflow-hidden px-2 sm:mr-0 sm:mt-24 md:mt-32">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-[var(--color-navy)] absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border-2 border-[var(--color-gold)]/30 p-2.5 shadow-2xl shadow-black/50 ring-1 ring-[var(--color-gold)]/20 backdrop-blur-sm bg-gradient-to-b from-[var(--color-gold)]/10 to-transparent hover:border-[var(--color-gold)]/40 transition-all duration-500 hover-lift">
                  <div className="rounded-2xl overflow-hidden ring-2 ring-[var(--color-gold)]/10">
                    <Image
                      className="bg-[var(--color-ivory)] aspect-[15/8] relative object-cover"
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0a6d0e65-00af-4c2d-b3da-a1ffa32c4565/generated_images/professional-studio-fashion-photography--2089927e-20251019183737.jpg"
                      alt="East & Tailor heritage collection showcase"
                      width="2700"
                      height="1440"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 flex w-[min(100%,18rem)] flex-col gap-4 rounded-2xl border border-[var(--color-gold)]/40 bg-[var(--color-navy)]/75 p-5 backdrop-blur-xl shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-[var(--color-gold)]/60">
                        <Image
                          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
                          alt="Hand finished collar detail"
                          sizes="48px"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--color-gold)]/80">
                          Signature capsule
                        </p>
                        <p className="text-sm text-[var(--color-ivory)]/85">
                          Maharaja evening suit — handloom Banarasi silk.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[var(--color-ivory)]/60">
                      <span>Crafted in 72 hours of atelier time</span>
                      <span className="font-semibold text-[var(--color-gold)]">Preview lookbook</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        {/* Press mentions section - more compact */}
        <section className="bg-[var(--color-navy)] py-12 md:py-16 border-t border-[var(--color-gold)]/10">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="text-center mb-8">
              <p className="text-gradient-gold text-xs font-semibold tracking-widest uppercase mb-2">As Featured In</p>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 sm:gap-x-12 sm:gap-y-8 items-center text-center">
              {pressMentions.map((label) => (
                <div key={label} className="flex items-center justify-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-ivory)]/60 transition-all duration-300 hover:text-[var(--color-gold)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
