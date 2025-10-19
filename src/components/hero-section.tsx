"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full bg-[var(--color-navy)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy)] to-[#0A1520] opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-gold)]/5 via-transparent to-transparent" />
            </div>
            
            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                {/* Refined badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 backdrop-blur-sm mb-6 animate-fade-in">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-gold)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-gold)]"></span>
                  </span>
                  <span className="text-[var(--color-gold)] text-sm font-medium tracking-wide">Est. 1875</span>
                </div>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-2 max-w-2xl text-5xl font-semibold md:text-7xl lg:mt-4 text-[var(--color-ivory)] tracking-tight leading-[1.1]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Heritage tailored for today.
                </TextEffect>
                
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mt-6 max-w-xl text-pretty text-[var(--color-ivory)]/70 text-lg leading-relaxed"
                >
                  Modern menswear rooted in Eastern heritage. Each piece crafted with 
                  natural fibers, ethical production, and precision tailoring — 
                  honoring tradition while embracing contemporary elegance.
                </TextEffect>

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
                  className="mt-10 flex items-center gap-3"
                >
                  <div
                    key={1}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-gold)] to-[#D4B563] rounded-[calc(var(--radius-xl)+0.25rem)] opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <Button
                      asChild
                      size="lg"
                      className="relative rounded-xl px-8 py-6 text-base bg-[var(--color-gold)] hover:bg-[var(--color-gold)]/90 text-[var(--color-navy)] font-semibold shadow-lg"
                    >
                      <Link href="/shop">
                        <span className="text-nowrap">Shop New Arrivals</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-12 rounded-xl px-8 text-base text-[var(--color-ivory)] hover:bg-[var(--color-ivory)]/10 font-medium border border-[var(--color-ivory)]/20 hover:border-[var(--color-ivory)]/30 transition-all"
                  >
                    <Link href="/custom">
                      <span className="text-nowrap">Book Fitting</span>
                    </Link>
                  </Button>
                </AnimatedGroup>

                {/* Trust indicators */}
                <div className="mt-12 flex items-center gap-6 text-[var(--color-ivory)]/60 text-sm animate-fade-in" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium">4.9 from 2,100+ reviews</span>
                  </div>
                  <div className="h-4 w-px bg-[var(--color-ivory)]/20" />
                  <span>Free worldwide shipping</span>
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
              <div className="relative -mr-56 mt-16 overflow-hidden px-2 sm:mr-0 sm:mt-20 md:mt-24">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-[var(--color-navy)] absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border-2 border-[var(--color-gold)]/20 p-2 shadow-2xl shadow-black/40 ring-1 ring-[var(--color-gold)]/10 backdrop-blur-sm bg-gradient-to-b from-[var(--color-gold)]/5 to-transparent">
                  <div className="rounded-2xl overflow-hidden ring-1 ring-[var(--color-gold)]/10">
                    <Image
                      className="bg-[var(--color-ivory)] aspect-[15/8] relative object-cover"
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0a6d0e65-00af-4c2d-b3da-a1ffa32c4565/generated_images/professional-studio-fashion-photography--2089927e-20251019183737.jpg"
                      alt="East & Tailor heritage collection showcase"
                      width="2700"
                      height="1440"
                    />
                  </div>
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        
        <section className="bg-[var(--color-navy)] pb-16 pt-20 md:pb-32 md:pt-24 border-t border-[var(--color-gold)]/10">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                href="/heritage"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 backdrop-blur-sm text-sm duration-150 hover:bg-[var(--color-gold)]/20 text-[var(--color-ivory)] font-medium"
              >
                <span className="tracking-wide">Crafted with tradition, worn with pride</span>
                <ChevronRight className="size-4" />
              </Link>
            </div>
            
            <div className="text-center mb-12 transition-opacity duration-500 group-hover:opacity-0">
              <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">As Featured In</p>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
            </div>
            
            <div className="transition-all duration-500 group-hover:blur-sm group-hover:opacity-30 mx-auto mt-12 grid max-w-3xl grid-cols-4 gap-x-12 gap-y-10 sm:gap-x-16 sm:gap-y-14 items-center">
              <div className="flex">
                <img
                  className="mx-auto h-5 w-fit brightness-0 invert opacity-50 hover:opacity-70 transition-opacity duration-300"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="GQ Magazine"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit brightness-0 invert opacity-50 hover:opacity-70 transition-opacity duration-300"
                  src="https://html.tailus.io/blocks/customers/column.svg"
                  alt="Esquire"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit brightness-0 invert opacity-50 hover:opacity-70 transition-opacity duration-300"
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  alt="Vogue Man"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-fit brightness-0 invert opacity-50 hover:opacity-70 transition-opacity duration-300"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  alt="Harper's Bazaar"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-fit brightness-0 invert opacity-50 hover:opacity-70 transition-opacity duration-300"
                  src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                  alt="Elle Man"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit brightness-0 invert opacity-50 hover:opacity-70 transition-opacity duration-300"
                  src="https://html.tailus.io/blocks/customers/laravel.svg"
                  alt="Gentlemen's Quarterly"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-7 w-fit brightness-0 invert opacity-50 hover:opacity-70 transition-opacity duration-300"
                  src="https://html.tailus.io/blocks/customers/lilly.svg"
                  alt="Men's Journal"
                  height="28"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-6 w-fit brightness-0 invert opacity-50 hover:opacity-70 transition-opacity duration-300"
                  src="https://html.tailus.io/blocks/customers/openai.svg"
                  alt="Style Guide Magazine"
                  height="24"
                  width="auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}